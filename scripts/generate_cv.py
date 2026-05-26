"""
Generate Melissa Morales CV PDF
Two-column layout with photo header — 1 page guaranteed
Output: public/Melissa_Morales_CV.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph, Spacer, HRFlowable, Frame
from reportlab.pdfgen import canvas as pdf_canvas
import os

# ── Colors ───────────────────────────────────────────────────────────────────
RED     = colors.HexColor("#b7102a")
DARK    = colors.HexColor("#1c1a1a")
MUTED   = colors.HexColor("#888888")
SIDEBAR = colors.HexColor("#f5f2f2")
WHITE   = colors.white
DIVIDER = colors.HexColor("#e0d8d8")

# ── Paths ────────────────────────────────────────────────────────────────────
BASE   = os.path.dirname(__file__)
OUTPUT = os.path.join(BASE, "../public/Melissa_Morales_CV.pdf")
PHOTO  = os.path.join(BASE, "../public/meli sideview.png")

# ── Page geometry ─────────────────────────────────────────────────────────────
W, H     = A4                  # 595.28 × 841.89 pt

HEADER_H = 130                 # reduced from 180
STATS_H  = 52                  # footer stats bar
ir = ImageReader(PHOTO)
_iw, _ih = ir.getSize()
PHOTO_W  = round(HEADER_H * _iw / _ih)  # ≈ 92 pt (natural aspect)
NAME_W   = W - PHOTO_W

SB_W     = 168
MAIN_W   = W - SB_W
SB_PAD   = 14
MAIN_PAD = 16

# Body frames sit between stats bar (bottom) and header (top)
BODY_Y   = STATS_H
BODY_H   = H - HEADER_H - STATS_H   # ≈ 660 pt

# ── Styles ────────────────────────────────────────────────────────────────────
def mk(name, **kw):
    base = dict(fontName="Helvetica", fontSize=8.5, leading=13,
                textColor=DARK, spaceAfter=0, spaceBefore=0)
    base.update(kw)
    return ParagraphStyle(name, **base)

ST = {
    # Header (on dark bg)
    "h_name":  mk("hn", fontName="Helvetica-Bold", fontSize=30, leading=34, textColor=WHITE),
    "h_title": mk("ht", fontName="Helvetica", fontSize=10, leading=14, textColor=RED),
    # Sidebar
    "sb_sec":  mk("ss", fontName="Helvetica-Bold", fontSize=7, leading=9,
                  textColor=DARK, spaceAfter=3, letterSpacing=1.2),
    "sb_lbl":  mk("sl", fontName="Helvetica", fontSize=6.5, leading=9,
                  textColor=MUTED, spaceBefore=5),
    "sb_val":  mk("sv", fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=DARK),
    "sb_bul":  mk("sbu", fontName="Helvetica", fontSize=7.5, leading=11.5,
                  textColor=MUTED, leftIndent=7, firstLineIndent=-7),
    # Main
    "m_sec":   mk("ms", fontName="Helvetica-Bold", fontSize=8, leading=10,
                  textColor=DARK, spaceAfter=3, letterSpacing=1.3),
    "company": mk("co", fontName="Helvetica-Bold", fontSize=9, leading=13,
                  textColor=DARK, spaceBefore=10),
    "role":    mk("ro", fontName="Helvetica-Oblique", fontSize=8, leading=11, textColor=MUTED),
    "body":    mk("bo", fontName="Helvetica", fontSize=8.5, leading=13, textColor=MUTED),
    "bul":     mk("bu", fontName="Helvetica", fontSize=8.5, leading=12.5,
                  textColor=MUTED, leftIndent=9, firstLineIndent=-9),
    "edu_h":   mk("eh", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=DARK),
    "edu_m":   mk("em", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED),
}

def accent(before=10):
    """Short red bar — spaceBefore is on the BAR so it stays tight to its title."""
    return HRFlowable(width=22, thickness=2.5, color=RED,
                      spaceBefore=before, spaceAfter=4)

def div():
    return HRFlowable(width="100%", thickness=0.5, color=DIVIDER,
                      spaceAfter=4, spaceBefore=0)

def sb_sec(text, first=False):
    return [accent(before=0 if first else 14),
            Paragraph(text.upper(), ST["sb_sec"])]

def m_sec(text, first=False):
    return [accent(before=0 if first else 14),
            Paragraph(text.upper(), ST["m_sec"])]

# ══════════════════════════════════════════════════════════════════════════════
# CONTENT
# ══════════════════════════════════════════════════════════════════════════════

# ── HEADER ───────────────────────────────────────────────────────────────────
header_items = [
    Spacer(1, 22),
    Paragraph("Melissa", ST["h_name"]),
    Paragraph("Morales", ST["h_name"]),
    Spacer(1, 6),
    Paragraph("Project Manager &amp; Construction Coordinator", ST["h_title"]),
]

# ── SIDEBAR ──────────────────────────────────────────────────────────────────
sb = []
sb += sb_sec("Contact", first=True)
for lbl, val in [
    ("EMAIL",     "melissamcanon@gmail.com"),
    ("PHONE",     "+57 313 646 6863"),
    ("LOCATION",  "Medellín, Colombia"),
    ("LINKEDIN",  "linkedin.com/in/melissamcanon"),
    ("VISA",      "B1/B2 U.S. Visa Holder"),
    ("LANGUAGES", "Spanish (native)  ·  English (B2)"),
]:
    sb.append(Paragraph(lbl, ST["sb_lbl"]))
    sb.append(Paragraph(val, ST["sb_val"]))

sb += sb_sec("Core Competencies")
for c in [
    "End-to-End Project Coordination",
    "Budget Preparation & Cost Control",
    "Risk Identification & Escalation",
    "Subcontractor & Supplier Management",
    "Milestone & Schedule Tracking",
    "Site Supervision & Quality Control",
    "Procurement & Purchase Orders",
    "Stakeholder Communication",
    "Regulatory Compliance",
]:
    sb.append(Paragraph(f"· {c}", ST["sb_bul"]))

sb += sb_sec("Tools & Software")
for t in ["MS Office", "Google Workspace", "Notion", "Trello",
          "ClickUp", "Asana", "AutoCAD", "SketchUp", "InDesign"]:
    sb.append(Paragraph(f"· {t}", ST["sb_bul"]))

# ── MAIN ─────────────────────────────────────────────────────────────────────
main = []
main += m_sec("About Me", first=True)
main.append(Paragraph(
    "Project Manager and Construction Coordinator with 7+ years delivering complex builds across "
    "retail, hospitality, healthcare, and residential sectors. Architectural training bridges design "
    "intent and structural execution. Bilingual (EN/ES), solution-oriented, and proven managing "
    "6+ concurrent projects on time and on budget.",
    ST["body"]
))

main += m_sec("Work Experience")
main.append(div())

for company, title, period, bullets in [
    (
        "CM Morales S.A.S",
        "Administrative Site Resident — Project Coordinator",
        "Jan 2024 — Present",
        [
            "Lead end-to-end coordination of PRANIK COLIVING (1,608 m²): scheduling, procurement, "
            "team oversight, and regulatory compliance for a 36-room hospitality renovation in Laureles.",
            "Track milestones and deliverables across subcontractors and suppliers; manage budgets, "
            "purchase orders, and weekly status updates for stakeholders.",
            "Coordinate structural reinforcements, facade overhaul, elevator installation, and "
            "emergency stairway execution within scope and budget.",
            "Manage administrative documentation including progress reports and cost variance tracking.",
        ],
    ),
    (
        "Espiral Studio",
        "Site Resident & Project Coordinator",
        "Dec 2021 — Dec 2023",
        [
            "Managed 6+ concurrent commercial projects across retail and food service — budgets, "
            "personnel, and materials from kickoff to handover.",
            "Prepared and monitored detailed project budgets; identified cost variances and "
            "implemented corrective actions.",
            "Coordinated B2B communications with clients, contractors, and suppliers on behalf "
            "of the lead architect/PM.",
            "Notable projects: IKEA Viva Envigado, Bodytech Éxito Robledo, Dollarcity Éxito Itagüí.",
        ],
    ),
    (
        "Contacto Arquitectura",
        "Site Resident & Space Personalization",
        "Apr 2019 — Dec 2021",
        [
            "Coordinated construction across healthcare, corporate, commercial, and residential "
            "sectors; managed schedules, budgets, and team assignments.",
            "Prepared cost estimates for residential and commercial remodeling projects.",
            "Key projects: Cedimed health centers, Arus cooperative HQ, Restaurante Akashi.",
        ],
    ),
    (
        "Tigo Une",
        "Design & Facilities Management Intern",
        "Jan 2018 — Jun 2018",
        [
            "Designed interior workspace layouts compliant with occupational and safety standards.",
            "Managed planimetry updates and space adaptation projects across multiple corporate locations.",
        ],
    ),
]:
    main.append(Paragraph(
        f'{company} &nbsp;<font color="#b7102a">— {period}</font>',
        ST["company"]
    ))
    main.append(Paragraph(title, ST["role"]))
    for b in bullets:
        main.append(Paragraph(f"· {b}", ST["bul"]))
    main.append(Spacer(1, 6))

main += m_sec("Education")
main.append(Paragraph("Bachelor of Architecture", ST["edu_h"]))
main.append(Paragraph(
    "Universidad de San Buenaventura, Medellín  ·  Graduated 2018",
    ST["edu_m"]
))

# ══════════════════════════════════════════════════════════════════════════════
# RENDER
# ══════════════════════════════════════════════════════════════════════════════
c = pdf_canvas.Canvas(OUTPUT, pagesize=A4)

# ── Stats bar (bottom, full width) ───────────────────────────────────────────
c.setFillColor(DARK)
c.rect(0, 0, W, STATS_H, fill=1, stroke=0)

stats = [
    ("7+",    "YEARS EXPERIENCE"),
    ("6+",    "CONCURRENT PROJECTS"),
    ("4",     "INDUSTRY SECTORS"),
    ("B1/B2", "U.S. VISA HOLDER"),
]
col_w = W / len(stats)
for i, (num, lbl) in enumerate(stats):
    cx = col_w * i + col_w / 2
    # Number
    c.setFillColor(RED)
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(cx, STATS_H - 22, num)
    # Label
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 6.5)
    c.drawCentredString(cx, STATS_H - 34, lbl)
    # Vertical divider (except last)
    if i < len(stats) - 1:
        c.setStrokeColor(colors.HexColor("#3a3838"))
        c.setLineWidth(0.5)
        c.line(col_w * (i + 1), 8, col_w * (i + 1), STATS_H - 8)

# ── Dark header background ────────────────────────────────────────────────────
c.setFillColor(DARK)
c.rect(0, H - HEADER_H, W, HEADER_H, fill=1, stroke=0)

# ── Photo (natural aspect, right side of header) ─────────────────────────────
c.drawImage(PHOTO, W - PHOTO_W, H - HEADER_H, width=PHOTO_W, height=HEADER_H)

# ── Sidebar background (full body height) ────────────────────────────────────
c.setFillColor(SIDEBAR)
c.rect(0, BODY_Y, SB_W, BODY_H, fill=1, stroke=0)

# ── Header text ──────────────────────────────────────────────────────────────
hf = Frame(
    22, H - HEADER_H,
    NAME_W - 30, HEADER_H,
    leftPadding=0, rightPadding=0,
    topPadding=0, bottomPadding=0,
    showBoundary=0,
)
hf.addFromList(header_items, c)

# ── Sidebar ───────────────────────────────────────────────────────────────────
sf = Frame(
    0, BODY_Y,
    SB_W, BODY_H,
    leftPadding=SB_PAD, rightPadding=SB_PAD,
    topPadding=14, bottomPadding=8,
    showBoundary=0,
)
sf.addFromList(sb, c)

# ── Main content ──────────────────────────────────────────────────────────────
mf = Frame(
    SB_W, BODY_Y,
    MAIN_W, BODY_H,
    leftPadding=MAIN_PAD, rightPadding=MAIN_PAD,
    topPadding=14, bottomPadding=8,
    showBoundary=0,
)
mf.addFromList(main, c)

c.save()
print(f"CV generated: {os.path.abspath(OUTPUT)}")
