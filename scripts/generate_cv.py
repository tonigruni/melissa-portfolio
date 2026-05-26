"""
Generate Melissa Morales CV PDF
Output: public/Melissa_Morales_CV.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
import os

# ── Colors ──────────────────────────────────────────────────────────────────
RED      = colors.HexColor("#b7102a")
DARK     = colors.HexColor("#271717")
MUTED    = colors.HexColor("#5b403f")
LIGHT    = colors.HexColor("#f4f4f4")
WHITE    = colors.white

# ── Page setup ───────────────────────────────────────────────────────────────
OUTPUT = os.path.join(os.path.dirname(__file__), "../public/Melissa_Morales_CV.pdf")
W, H = A4
MARGIN_X = 18 * mm
MARGIN_Y = 16 * mm

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=MARGIN_X,
    rightMargin=MARGIN_X,
    topMargin=MARGIN_Y,
    bottomMargin=MARGIN_Y,
)

# ── Styles ───────────────────────────────────────────────────────────────────
def s(name, **kw):
    defaults = dict(fontName="Helvetica", fontSize=9, leading=13,
                    textColor=DARK, spaceAfter=0, spaceBefore=0)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

ST = {
    "name":       s("name",    fontName="Helvetica-Bold", fontSize=26, leading=30, textColor=DARK),
    "title":      s("title",   fontName="Helvetica",      fontSize=11, leading=14, textColor=RED),
    "contact":    s("contact", fontName="Helvetica",      fontSize=8,  leading=12, textColor=MUTED),
    "section":    s("section", fontName="Helvetica-Bold", fontSize=8,  leading=10, textColor=RED,
                               spaceBefore=8, spaceAfter=4, letterSpacing=1.2),
    "role_title": s("rtitle",  fontName="Helvetica-Bold", fontSize=9,  leading=12, textColor=DARK),
    "role_meta":  s("rmeta",   fontName="Helvetica",      fontSize=8,  leading=11, textColor=RED),
    "body":       s("body",    fontName="Helvetica",      fontSize=8.5,leading=12.5, textColor=MUTED),
    "bullet":     s("bullet",  fontName="Helvetica",      fontSize=8.5,leading=12.5, textColor=MUTED,
                               leftIndent=8, firstLineIndent=-8),
    "skill_tag":  s("stag",    fontName="Helvetica-Bold", fontSize=7.5,leading=10, textColor=DARK),
    "stat_num":   s("snum",    fontName="Helvetica-Bold", fontSize=20, leading=22, textColor=RED),
    "stat_lbl":   s("slbl",    fontName="Helvetica-Bold", fontSize=6.5,leading=9,  textColor=DARK,
                               letterSpacing=0.8),
}

def rule(color=RED, thickness=1.5):
    return HRFlowable(width="100%", thickness=thickness, color=color, spaceAfter=6, spaceBefore=0)

def section_header(text):
    return [
        Spacer(1, 6),
        Paragraph(text.upper(), ST["section"]),
        rule(RED, 0.8),
    ]

def bullet(text):
    return Paragraph(f"/ &nbsp;{text}", ST["bullet"])

# ── Content ───────────────────────────────────────────────────────────────────
story = []

# ── HEADER ────────────────────────────────────────────────────────────────────
story.append(Paragraph("Melissa Morales", ST["name"]))
story.append(Spacer(1, 3))
story.append(Paragraph("Project Manager &amp; Construction Coordinator", ST["title"]))
story.append(Spacer(1, 5))
story.append(Paragraph(
    "melissamcanon@gmail.com &nbsp;&nbsp;·&nbsp;&nbsp; "
    "+57 313 646 6863 &nbsp;&nbsp;·&nbsp;&nbsp; "
    "Medellín, Colombia &nbsp;&nbsp;·&nbsp;&nbsp; "
    "linkedin.com/in/melissamcanon &nbsp;&nbsp;·&nbsp;&nbsp; "
    "B1/B2 U.S. Visa Holder &nbsp;&nbsp;·&nbsp;&nbsp; Bilingual EN/ES",
    ST["contact"]
))
story.append(Spacer(1, 8))
story.append(rule(RED, 2))

# ── SUMMARY ───────────────────────────────────────────────────────────────────
story += section_header("Profile")
story.append(Paragraph(
    "Project Manager and Construction Coordinator with 7+ years delivering complex builds across retail, "
    "hospitality, healthcare, and residential sectors. Architectural training provides a technical edge — "
    "able to bridge design intent and structural execution. Proven track record managing 6+ concurrent "
    "projects, bilingual stakeholder communication (EN/ES), and a proactive, solution-oriented approach "
    "that keeps projects on time and on budget.",
    ST["body"]
))

# ── CORE COMPETENCIES ─────────────────────────────────────────────────────────
story += section_header("Core Competencies")
skills_data = [
    ["End-to-End Project Coordination", "Budget Preparation & Cost Control", "Risk Identification & Escalation"],
    ["Subcontractor & Supplier Management", "Cross-functional Stakeholder Communication", "Procurement & Purchase Orders"],
    ["Milestone & Schedule Tracking", "Site Supervision & Quality Control", "Regulatory Compliance"],
]
skills_table = Table(
    [[Paragraph(cell, ST["bullet"]) for cell in row] for row in skills_data],
    colWidths=[(W - 2 * MARGIN_X) / 3] * 3,
)
skills_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
]))
story.append(skills_table)

# ── EXPERIENCE ────────────────────────────────────────────────────────────────
story += section_header("Work Experience")

roles = [
    {
        "title": "Administrative Site Resident — Project Coordinator",
        "company": "CM Morales S.A.S",
        "period": "Jan 2024 — Present",
        "bullets": [
            "Lead end-to-end coordination of the PRANIK COLIVING project (1,608 m²): scheduling, procurement, team oversight, and regulatory compliance for a 36-room hospitality renovation in Laureles, Medellín.",
            "Track project milestones, deliverables, and deadlines across subcontractors and suppliers; escalate risks proactively to project leadership.",
            "Manage administrative documentation: budgets, purchase orders, progress reports, and weekly status updates for stakeholders.",
            "Coordinate structural reinforcements, facade overhaul, elevator installation, and emergency stairway execution within scope and budget.",
        ],
    },
    {
        "title": "Site Resident & Project Coordinator",
        "company": "Espiral Studio",
        "period": "Dec 2021 — Dec 2023",
        "bullets": [
            "Managed 6+ concurrent commercial construction projects across retail and food service, coordinating budgets, personnel, and materials from kickoff to handover.",
            "Prepared and monitored detailed project budgets; identified cost variances and implemented corrective actions.",
            "Coordinated B2B communications with clients, contractors, and suppliers on behalf of the lead architect/PM.",
            "Notable projects: IKEA Viva Envigado, Bodytech Éxito Robledo, Dollarcity Éxito Itagüí, Bimbo Itagüí plant.",
        ],
    },
    {
        "title": "Site Resident & Space Personalization",
        "company": "Contacto Arquitectura",
        "period": "Apr 2019 — Dec 2021",
        "bullets": [
            "Coordinated construction execution across healthcare, corporate, commercial, and residential sectors; managed schedules, budgets, procurement, and team assignments.",
            "Prepared cost estimates for residential and commercial remodeling projects.",
            "Key projects: Cedimed health centers, Arus cooperative HQ, Restaurante Akashi, residential model units.",
        ],
    },
    {
        "title": "Design & Facilities Management Intern",
        "company": "Tigo Une",
        "period": "Jan 2018 — Jun 2018",
        "bullets": [
            "Designed interior workspace layouts compliant with occupational and safety standards.",
            "Managed planimetry updates and space adaptation projects across multiple corporate locations.",
            "Coordinated logistics for office relocations and facility improvements.",
        ],
    },
]

for role in roles:
    # Title + meta in a two-column row
    meta_table = Table(
        [[Paragraph(role["title"], ST["role_title"]),
          Paragraph(f"{role['company']} &nbsp;|&nbsp; {role['period']}", ST["role_meta"])]],
        colWidths=[(W - 2 * MARGIN_X) * 0.62, (W - 2 * MARGIN_X) * 0.38],
    )
    meta_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
    ]))
    story.append(meta_table)
    for b in role["bullets"]:
        story.append(bullet(b))
    story.append(Spacer(1, 8))

# ── EDUCATION ────────────────────────────────────────────────────────────────
story += section_header("Education")
edu_table = Table(
    [[Paragraph("Bachelor of Architecture", ST["role_title"]),
      Paragraph("Universidad de San Buenaventura, Medellín &nbsp;|&nbsp; Graduated 2018", ST["role_meta"])]],
    colWidths=[(W - 2 * MARGIN_X) * 0.38, (W - 2 * MARGIN_X) * 0.62],
)
edu_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("ALIGN", (1, 0), (1, 0), "RIGHT"),
]))
story.append(edu_table)

# ── TOOLS ────────────────────────────────────────────────────────────────────
story += section_header("Tools & Software")
tools = ["Microsoft Office", "Google Workspace", "Notion", "Trello", "ClickUp",
         "Asana", "AutoCAD", "SketchUp", "InDesign"]
story.append(Paragraph(
    " &nbsp;·&nbsp; ".join(tools),
    ST["body"]
))

# ── STATS BAR ────────────────────────────────────────────────────────────────
story.append(Spacer(1, 10))
stats = [
    ("7+",  "Years Experience"),
    ("6+",  "Concurrent Projects"),
    ("4",   "Industry Sectors"),
    ("B1/B2","U.S. Visa Holder"),
]
stats_row = [[Paragraph(v, ST["stat_num"]), Paragraph(l.upper(), ST["stat_lbl"])] for v, l in stats]
# Build as paired columns
flat = []
for num_p, lbl_p in stats_row:
    flat.append([num_p, lbl_p])

stats_table = Table(
    [flat[0] + flat[1] + flat[2] + flat[3]],
    colWidths=[(W - 2 * MARGIN_X) / 8] * 8,
)
stats_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 2),
    ("TOPPADDING", (0, 0), (-1, -1), 6),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
    ("LINEABOVE", (0, 0), (-1, 0), 2, RED),
]))
story.append(stats_table)

# ── BUILD ─────────────────────────────────────────────────────────────────────
doc.build(story)
print(f"CV generated: {os.path.abspath(OUTPUT)}")
