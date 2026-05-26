"""
Generate Melissa Morales CV PDF
Two-column layout with photo header — 1 page guaranteed
Output: public/Melissa_Morales_CV.pdf

Uses canvas + Frame (not SimpleDocTemplate) for precise 1-page control.
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
MUTED   = colors.HexColor("#777777")
SIDEBAR = colors.HexColor("#f7f4f4")
WHITE   = colors.white
DIVIDER = colors.HexColor("#e4dcdc")

# ── Paths ────────────────────────────────────────────────────────────────────
BASE   = os.path.dirname(__file__)
OUTPUT = os.path.join(BASE, "../public/Melissa_Morales_CV.pdf")
PHOTO  = os.path.join(BASE, "../public/meli sideview.png")

# ── Page geometry ─────────────────────────────────────────────────────────────
W, H      = A4                 # 595.28 × 841.89 pt

# Photo: scale to fill HEADER_H at natural aspect ratio (no distortion)
HEADER_H  = 180
ir = ImageReader(PHOTO)
_iw, _ih  = ir.getSize()
PHOTO_W   = round(HEADER_H * _iw / _ih)   # ≈ 121 pt
NAME_W    = W - PHOTO_W                   # ≈ 474 pt

# Body columns
SB_W      = 170
MAIN_W    = W - SB_W           # 425 pt
SB_PAD    = 14
MAIN_PAD  = 16
BODY_H    = H - HEADER_H       # 661.89 pt

# ── Styles ────────────────────────────────────────────────────────────────────
def mk(name, **kw):
    base = dict(fontName="Helvetica", fontSize=8.5, leading=12.5,
                textColor=DARK, spaceAfter=0, spaceBefore=0)
    base.update(kw)
    return ParagraphStyle(name, **base)

ST = {
    # Header (on dark bg)
    "h_name":  mk("hn", fontName="Helvetica-Bold", fontSize=28, leading=32, textColor=WHITE),
    "h_title": mk("ht", fontName="Helvetica",      fontSize=9.5, leading=13, textColor=RED),
    # Sidebar
    "sb_sec":  mk("ss", fontName="Helvetica-Bold", fontSize=7,   leading=9,  textColor=DARK,
                  spaceBefore=14, spaceAfter=3, letterSpacing=1.2),
    "sb_lbl":  mk("sl", fontName="Helvetica",      fontSize=6.5, leading=9,  textColor=MUTED, spaceBefore=5),
    "sb_val":  mk("sv", fontName="Helvetica-Bold", fontSize=8,   leading=11, textColor=DARK),
    "sb_bul":  mk("sbu",fontName="Helvetica",      fontSize=7.5, leading=11, textColor=MUTED,
                  leftIndent=7, firstLineIndent=-7),
    # Main
    "m_sec":   mk("ms", fontName="Helvetica-Bold", fontSize=8,   leading=10, textColor=DARK,
                  spaceBefore=12, spaceAfter=3, letterSpacing=1.3),
    "company": mk("co", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=DARK, spaceBefore=8),
    "role":    mk("ro", fontName="Helvetica",      fontSize=8,   leading=11, textColor=MUTED),
    "body":    mk("bo", fontName="Helvetica",      fontSize=8,   leading=12, textColor=MUTED),
    "bul":     mk("bu", fontName="Helvetica",      fontSize=8,   leading=11.5,textColor=MUTED,
                  leftIndent=8, firstLineIndent=-8),
    "edu_h":   mk("eh", fontName="Helvetica-Bold", fontSize=8,   leading=11, textColor=DARK),
    "edu_m":   mk("em", fontName="Helvetica",      fontSize=8,   leading=11, textColor=MUTED),
}

def accent():
    return HRFlowable(width=22, thickness=2.5, color=RED, spaceAfter=4, spaceBefore=0)

def div():
    return HRFlowable(width="100%", thickness=0.5, color=DIVIDER, spaceAfter=4, spaceBefore=0)

def sb_sec(text):
    return [accent(), Paragraph(text.upper(), ST["sb_sec"])]

def m_sec(text):
    return [accent(), Paragraph(text.upper(), ST["m_sec"])]

# ══════════════════════════════════════════════════════════════════════════════
# CONTENT LISTS
# ══════════════════════════════════════════════════════════════════════════════

# ── HEADER content ───────────────────────────────────────────────────────────
header_items = [
    Spacer(1, 24),
    HRFlowable(width=26, thickness=3, color=RED, spaceAfter=10, spaceBefore=0),
    Paragraph("Melissa", ST["h_name"]),
    Paragraph("Morales", ST["h_name"]),
    Spacer(1, 7),
    Paragraph("Project Manager &amp; Construction Coordinator", ST["h_title"]),
]

# ── SIDEBAR content ──────────────────────────────────────────────────────────
sb = []
sb += sb_sec("Contact")
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
for tool in ["MS Office", "Google Workspace", "Notion", "Trello",
             "ClickUp", "Asana", "AutoCAD", "SketchUp", "InDesign"]:
    sb.append(Paragraph(f"· {tool}", ST["sb_bul"]))

# ── MAIN content ─────────────────────────────────────────────────────────────
main = []
main += m_sec("About Me")
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
            "Lead end-to-end coordination of PRANIK COLIVING (1,608 m²): scheduling, procurement, team oversight, and regulatory compliance for a 36-room hospitality renovation in Laureles.",
            "Track milestones across subcontractors and suppliers; manage budgets, purchase orders, and weekly stakeholder reports.",
            "Coordinate structural reinforcements, facade overhaul, elevator installation, and emergency stairway within scope and budget.",
        ],
    ),
    (
        "Espiral Studio",
        "Site Resident & Project Coordinator",
        "Dec 2021 — Dec 2023",
        [
            "Managed 6+ concurrent commercial projects (retail, food service) — budgets, personnel, and materials from kickoff to handover.",
            "Prepared and monitored detailed project budgets; identified cost variances and implemented corrective actions.",
            "Notable: IKEA Viva Envigado, Bodytech Éxito Robledo, Dollarcity Éxito Itagüí, Bimbo Itagüí plant.",
        ],
    ),
    (
        "Contacto Arquitectura",
        "Site Resident & Space Personalization",
        "Apr 2019 — Dec 2021",
        [
            "Coordinated construction across healthcare, corporate, commercial, and residential sectors; managed schedules, budgets, and team assignments.",
            "Key projects: Cedimed health centers, Arus cooperative HQ, Restaurante Akashi, residential model units.",
        ],
    ),
    (
        "Tigo Une",
        "Design & Facilities Management Intern",
        "Jan 2018 — Jun 2018",
        [
            "Designed interior workspace layouts; managed planimetry updates and office relocation logistics across multiple locations.",
        ],
    ),
]:
    main.append(Paragraph(
        f'{company} &nbsp;<font color="#b7102a">— {period}</font>',
        ST["company"]
    ))
    main.append(Paragraph(f'<i>{title}</i>', ST["role"]))
    for b in bullets:
        main.append(Paragraph(f"· {b}", ST["bul"]))
    main.append(Spacer(1, 5))

main += m_sec("Education")
main.append(Paragraph("Bachelor of Architecture", ST["edu_h"]))
main.append(Paragraph(
    "Universidad de San Buenaventura, Medellín  ·  Graduated 2018",
    ST["edu_m"]
))

# ══════════════════════════════════════════════════════════════════════════════
# RENDER — canvas + Frame (guaranteed 1 page)
# ══════════════════════════════════════════════════════════════════════════════
c = pdf_canvas.Canvas(OUTPUT, pagesize=A4)

# ── Draw backgrounds ─────────────────────────────────────────────────────────
# Header: dark
c.setFillColor(DARK)
c.rect(0, H - HEADER_H, W, HEADER_H, fill=1, stroke=0)

# Photo (natural aspect, no distortion)
c.drawImage(PHOTO, W - PHOTO_W, H - HEADER_H, width=PHOTO_W, height=HEADER_H)

# Sidebar: pinkish-white, full body height
c.setFillColor(SIDEBAR)
c.rect(0, 0, SB_W, BODY_H, fill=1, stroke=0)

# ── Flow header text ─────────────────────────────────────────────────────────
header_frame = Frame(
    22, H - HEADER_H,          # x, y (bottom-left of frame)
    NAME_W - 30, HEADER_H,     # width, height
    leftPadding=0, rightPadding=0,
    topPadding=0, bottomPadding=0,
    showBoundary=0,
)
header_frame.addFromList(header_items, c)

# ── Flow sidebar ─────────────────────────────────────────────────────────────
sb_frame = Frame(
    0, 0,
    SB_W, BODY_H,
    leftPadding=SB_PAD, rightPadding=SB_PAD,
    topPadding=14, bottomPadding=8,
    showBoundary=0,
)
sb_frame.addFromList(sb, c)

# ── Flow main content ─────────────────────────────────────────────────────────
main_frame = Frame(
    SB_W, 0,
    MAIN_W, BODY_H,
    leftPadding=MAIN_PAD, rightPadding=MAIN_PAD,
    topPadding=14, bottomPadding=8,
    showBoundary=0,
)
main_frame.addFromList(main, c)

# ── Save ─────────────────────────────────────────────────────────────────────
c.save()
print(f"CV generated: {os.path.abspath(OUTPUT)}")
