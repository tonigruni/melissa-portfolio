"""
Generate Melissa Morales CV PDF
Image header, two-column body, fills full A4 page
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
DARK    = colors.HexColor("#1c1a1a")
MUTED   = colors.HexColor("#777777")
SIDEBAR = colors.HexColor("#f5f2f2")
WHITE   = colors.white
DIVIDER = colors.HexColor("#d8d0d0")

# ── Paths ────────────────────────────────────────────────────────────────────
BASE      = os.path.dirname(__file__)
OUTPUT    = os.path.join(BASE, "../public/Melissa_Morales_CV.pdf")
HEADER_IMG = os.path.join(BASE, "../public/CV header.png")

# ── Page geometry ─────────────────────────────────────────────────────────────
W, H = A4                          # 595.28 × 841.89 pt

# Header image: display at full page width, preserve aspect ratio
ir = ImageReader(HEADER_IMG)
_iw, _ih = ir.getSize()
HEADER_H = round(W * _ih / _iw)   # natural height at full width ≈ 143 pt

BODY_H = H - HEADER_H             # remaining body height ≈ 699 pt

SB_W     = 175
MAIN_W   = W - SB_W
SB_PAD   = 16
MAIN_PAD = 18

# ── Styles ────────────────────────────────────────────────────────────────────
def mk(name, **kw):
    base = dict(fontName="Helvetica", fontSize=9.5, leading=15,
                textColor=DARK, spaceAfter=0, spaceBefore=0)
    base.update(kw)
    return ParagraphStyle(name, **base)

ST = {
    # Sidebar
    "sb_sec":  mk("ss", fontName="Helvetica-Bold", fontSize=8, leading=11,
                  textColor=DARK, spaceAfter=4, letterSpacing=1.3),
    "sb_lbl":  mk("sl", fontName="Helvetica", fontSize=7.5, leading=10,
                  textColor=MUTED, spaceBefore=6),
    "sb_val":  mk("sv", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=DARK),
    "sb_bul":  mk("sbu", fontName="Helvetica", fontSize=8.5, leading=13,
                  textColor=MUTED, leftIndent=9, firstLineIndent=-9),
    "sb_stat_n": mk("ssn", fontName="Helvetica-Bold", fontSize=20, leading=21, textColor=DARK),
    "sb_stat_l": mk("ssl", fontName="Helvetica", fontSize=7.5, leading=10,
                    textColor=MUTED, letterSpacing=0.5),
    # Main
    "m_sec":   mk("ms", fontName="Helvetica-Bold", fontSize=9, leading=12,
                  textColor=DARK, spaceAfter=5, letterSpacing=1.3),
    "company": mk("co", fontName="Helvetica-Bold", fontSize=10, leading=14,
                  textColor=DARK, spaceBefore=11),
    "role":    mk("ro", fontName="Helvetica-Oblique", fontSize=8.5, leading=12, textColor=MUTED),
    "body":    mk("bo", fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED),
    "bul":     mk("bu", fontName="Helvetica", fontSize=9, leading=12.5,
                  textColor=MUTED, leftIndent=10, firstLineIndent=-10),
    "edu_h":   mk("eh", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=DARK),
    "edu_m":   mk("em", fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED),
}

def div(color=DIVIDER, thickness=0.5):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceBefore=0, spaceAfter=5)

def sb_sec(text, first=False):
    items = []
    if not first:
        items.append(Spacer(1, 14))
    items.append(Paragraph(text.upper(), ST["sb_sec"]))
    items.append(div())
    return items

def m_sec(text, first=False):
    items = []
    if not first:
        items.append(Spacer(1, 18))
    items.append(Paragraph(text.upper(), ST["m_sec"]))
    items.append(div())
    return items

# ══════════════════════════════════════════════════════════════════════════════
# CONTENT
# ══════════════════════════════════════════════════════════════════════════════

# ── SIDEBAR ──────────────────────────────────────────────────────────────────
sb = []

# Key stats (fills top of sidebar with impact numbers)
sb += sb_sec("Highlights", first=True)
for num, lbl in [
    ("7+",    "Years of Experience"),
    ("6+",    "Concurrent Projects"),
    ("4",     "Industry Sectors"),
]:
    sb.append(Paragraph(num, ST["sb_stat_n"]))
    sb.append(Paragraph(lbl.upper(), ST["sb_stat_l"]))
    sb.append(Spacer(1, 5))

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
for t in ["MS Office", "Google Workspace", "Notion", "Trello",
          "ClickUp", "Asana", "AutoCAD", "SketchUp", "InDesign"]:
    sb.append(Paragraph(f"· {t}", ST["sb_bul"]))

# ── MAIN ─────────────────────────────────────────────────────────────────────
main = []

main += m_sec("About Me", first=True)
main.append(Paragraph(
    "Project Manager and Construction Coordinator with 7+ years delivering complex builds across "
    "retail, hospitality, healthcare, and residential sectors. Architectural training bridges design "
    "intent and structural execution. Bilingual (EN/ES), solution-oriented, and consistently proven "
    "managing 6+ concurrent projects on time and on budget.",
    ST["body"]
))

main += m_sec("Work Experience")

for company, title, period, bullets in [
    (
        "CM Morales S.A.S",
        "Administrative Site Resident — Project Coordinator",
        "Jan 2024 — Present",
        [
            "Lead end-to-end coordination of PRANIK COLIVING (1,608 m²): scheduling, procurement, "
            "team oversight, and regulatory compliance for a 36-room hospitality renovation.",
            "Track milestones and deliverables across subcontractors and suppliers; manage budgets, "
            "purchase orders, and weekly status updates for all stakeholders.",
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
            "Notable: IKEA Viva Envigado, Bodytech Éxito Robledo, Dollarcity Éxito Itagüí.",
        ],
    ),
    (
        "Contacto Arquitectura",
        "Site Resident & Space Personalization",
        "Apr 2019 — Dec 2021",
        [
            "Coordinated construction across healthcare, corporate, commercial, and residential "
            "sectors; managed schedules, budgets, procurement, and team assignments.",
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
        f'<b>{company}</b> &nbsp;&nbsp;<font color="#888888" size="8">— {period}</font>',
        ST["company"]
    ))
    main.append(Paragraph(title, ST["role"]))
    for b in bullets:
        main.append(Paragraph(f"· {b}", ST["bul"]))
    main.append(Spacer(1, 9))

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

# ── Header image (full width) ─────────────────────────────────────────────────
c.drawImage(HEADER_IMG, 0, H - HEADER_H, width=W, height=HEADER_H)

# ── Sidebar background ────────────────────────────────────────────────────────
c.setFillColor(SIDEBAR)
c.rect(0, 0, SB_W, BODY_H, fill=1, stroke=0)

# ── Sidebar content ───────────────────────────────────────────────────────────
sf = Frame(
    0, 0,
    SB_W, BODY_H,
    leftPadding=SB_PAD, rightPadding=SB_PAD,
    topPadding=22, bottomPadding=12,
    showBoundary=0,
)
sf.addFromList(sb, c)

# ── Main content ──────────────────────────────────────────────────────────────
mf = Frame(
    SB_W, 0,
    MAIN_W, BODY_H,
    leftPadding=MAIN_PAD, rightPadding=MAIN_PAD,
    topPadding=22, bottomPadding=12,
    showBoundary=0,
)
mf.addFromList(main, c)

c.save()
print(f"CV generated: {os.path.abspath(OUTPUT)}")
