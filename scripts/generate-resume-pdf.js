import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Standard Helvetica & Helvetica-Bold Width Metrics (AFM standard) ───────
const H_WIDTHS = {
  ' ': 278, '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667, "'": 191,
  '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
  '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556,
  '8': 556, '9': 556, ':': 278, ';': 278, '<': 584, '=': 584, '>': 584, '?': 556,
  '@': 1015, 'A': 667, 'B': 667, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778,
  'H': 722, 'I': 278, 'J': 500, 'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778,
  'P': 667, 'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
  'X': 667, 'Y': 667, 'Z': 611, '[': 278, '\\': 278, ']': 278, '^': 469, '_': 556,
  '`': 222, 'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556, 'f': 278, 'g': 556,
  'h': 556, 'i': 222, 'j': 222, 'k': 500, 'l': 222, 'm': 833, 'n': 556, 'o': 556,
  'p': 556, 'q': 556, 'r': 333, 's': 500, 't': 278, 'u': 556, 'v': 500, 'w': 722,
  'x': 500, 'y': 500, 'z': 500, '{': 334, '|': 260, '}': 334, '~': 584
};

const HB_WIDTHS = {
  ' ': 278, '!': 333, '"': 474, '#': 556, '$': 556, '%': 889, '&': 722, "'": 238,
  '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
  '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556,
  '8': 556, '9': 556, ':': 333, ';': 333, '<': 584, '=': 584, '>': 584, '?': 611,
  '@': 975, 'A': 722, 'B': 722, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778,
  'H': 722, 'I': 278, 'J': 556, 'K': 722, 'L': 611, 'M': 833, 'N': 722, 'O': 778,
  'P': 667, 'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
  'X': 667, 'Y': 667, 'Z': 611, '[': 333, '\\': 278, ']': 333, '^': 584, '_': 556,
  '`': 278, 'a': 556, 'b': 611, 'c': 556, 'd': 611, 'e': 556, 'f': 333, 'g': 611,
  'h': 611, 'i': 278, 'j': 278, 'k': 556, 'l': 278, 'm': 889, 'n': 611, 'o': 611,
  'p': 611, 'q': 611, 'r': 389, 's': 556, 't': 333, 'u': 611, 'v': 556, 'w': 778,
  'x': 556, 'y': 556, 'z': 500, '{': 389, '|': 280, '}': 389, '~': 584
};

function measureText(str, size, isBold = false, charSpacing = 0) {
  const table = isBold ? HB_WIDTHS : H_WIDTHS;
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const w = table[ch] || 550;
    total += (w / 1000) * size + charSpacing;
  }
  return total;
}

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

// ── Build High-Quality Professional A4 Resume PDF ────────────────────────────
function buildResumePdf() {
  // ISO A4 Dimensions: 210mm × 297mm = 595.28 pt × 841.89 pt
  const W = 595.28;
  const H = 841.89;

  // Balanced Professional Margins (46pt left/right, 44pt top, ~55pt bottom)
  const mL = 46;
  const mR = 46;
  const contentW = W - mL - mR; // 503.28 pt

  const ops = [];
  const annots = [];

  // Color Palette matching portfolio modal
  const NAVY        = '0.059 0.090 0.165'; // #0f172a - Slate 900
  const TEAL        = '0.051 0.580 0.533'; // #0d9488 - Teal 600
  const DARK        = '0.200 0.255 0.333'; // #334155 - Slate 700
  const MUTED       = '0.392 0.455 0.545'; // #64748b - Slate 500
  const LIGHT_DIV   = '0.580 0.639 0.722'; // #94a3b8 - Slate 400
  const RULE_STROKE = '0.200 0.255 0.333'; // Slate 700 heading line
  const LINKEDIN_BL = '0.039 0.400 0.761'; // #0a66c2 - LinkedIn Blue

  // Helper functions for drawing
  function text(txt, x, y, font, size, colorRgb, charSpacing = 0) {
    if (charSpacing > 0) {
      ops.push(`BT /${font} ${size} Tf ${colorRgb} rg ${charSpacing} Tc 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${esc(txt)}) Tj 0 Tc ET`);
    } else {
      ops.push(`BT /${font} ${size} Tf ${colorRgb} rg 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${esc(txt)}) Tj ET`);
    }
  }

  function bold(txt, x, y, size, colorRgb, charSpacing = 0) {
    text(txt, x, y, 'F2', size, colorRgb, charSpacing);
  }

  function regular(txt, x, y, size, colorRgb, charSpacing = 0) {
    text(txt, x, y, 'F1', size, colorRgb, charSpacing);
  }

  function hLine(x1, x2, y, colorRgb, lineW = 1.0) {
    ops.push(`${colorRgb} RG ${lineW} w ${x1.toFixed(2)} ${y.toFixed(2)} m ${x2.toFixed(2)} ${y.toFixed(2)} l S`);
  }

  function vLine(x, y1, y2, colorRgb, lineW = 0.8) {
    ops.push(`${colorRgb} RG ${lineW} w ${x.toFixed(2)} ${y1.toFixed(2)} m ${x.toFixed(2)} ${y2.toFixed(2)} l S`);
  }

  // Draw smooth circle with cubic Bezier curves
  function circle(cx, cy, r, colorRgb, stroke = false) {
    const k = r * 0.55228475;
    if (stroke) {
      ops.push(`${colorRgb} RG 0.8 w`);
    } else {
      ops.push(`${colorRgb} rg`);
    }
    ops.push(`${(cx).toFixed(2)} ${(cy + r).toFixed(2)} m`);
    ops.push(`${(cx + k).toFixed(2)} ${(cy + r).toFixed(2)} ${(cx + r).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx + r).toFixed(2)} ${(cy).toFixed(2)} c`);
    ops.push(`${(cx + r).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx + k).toFixed(2)} ${(cy - r).toFixed(2)} ${(cx).toFixed(2)} ${(cy - r).toFixed(2)} c`);
    ops.push(`${(cx - k).toFixed(2)} ${(cy - r).toFixed(2)} ${(cx - r).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx - r).toFixed(2)} ${(cy).toFixed(2)} c`);
    ops.push(`${(cx - r).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx - k).toFixed(2)} ${(cy + r).toFixed(2)} ${(cx).toFixed(2)} ${(cy + r).toFixed(2)} c`);
    ops.push(stroke ? 'S' : 'f');
  }

  // Draw bullet disc
  function bullet(x, y, r = 2.0, color = DARK) {
    circle(x, y + 3.2, r, color);
  }

  // Add clickable hyperlink annotation
  function addLink(x, y, w, h, url) {
    const x1 = x.toFixed(2);
    const y1 = (y - 2).toFixed(2);
    const x2 = (x + w).toFixed(2);
    const y2 = (y + h).toFixed(2);
    annots.push(`<< /Type /Annot /Subtype /Link /Rect [${x1} ${y1} ${x2} ${y2}] /Border [0 0 0] /A << /S /URI /URI (${esc(url)}) >> >>`);
  }

  // ════════════════════════════════════════════════════════════════════════
  // ── HEADER (Centered, polished, matching reference) ──────────────────────
  // ════════════════════════════════════════════════════════════════════════
  let y = H - 46; // Start at 795.89 pt

  // 1. Name: MITUL PADHIYAR (28pt bold navy, uppercase, tracked)
  const name = 'MITUL PADHIYAR';
  const nameSize = 28;
  const nameTracking = 1.9;
  const nameW = measureText(name, nameSize, true, nameTracking);
  bold(name, (W - nameW) / 2, y, nameSize, NAVY, nameTracking);
  y -= 26;

  // 2. Title: WEB DEVELOPER (13pt bold teal, tracked)
  const title = 'WEB DEVELOPER';
  const titleSize = 13;
  const titleTracking = 1.5;
  const titleW = measureText(title, titleSize, true, titleTracking);
  bold(title, (W - titleW) / 2, y, titleSize, TEAL, titleTracking);
  y -= 20;

  // 3. Location: Anand, Gujarat, India (10.5pt muted)
  const loc = 'Anand, Gujarat, India';
  const locSize = 10.5;
  const locW = measureText(loc, locSize, false);
  regular(loc, (W - locW) / 2, y, locSize, MUTED);
  y -= 23;

  // 4. Contact Row 1: Phone + Email with vector icons
  const phone = '+91 92741 18773';
  const email = 'mitulpadhiyar0369@gmail.com';
  const cSize = 10.0;

  const phoneW = measureText(phone, cSize, false);
  const emailW = measureText(email, cSize, false);
  const sepW = measureText(' | ', cSize, false);
  const iconD = 12.5; // icon width
  const iconGap = 5.5;

  const row1TotalW = iconD + iconGap + phoneW + sepW + iconD + iconGap + emailW;
  let r1X = (W - row1TotalW) / 2;

  // Phone vector icon: teal circle with white handset symbol
  circle(r1X + 6.2, y + 3.2, 5.8, TEAL);
  // White handset inside circle
  ops.push(`1 1 1 RG 0.95 w 1 J 1 j`);
  ops.push(`${(r1X + 4.3).toFixed(2)} ${(y + 4.7).toFixed(2)} m ${(r1X + 5.2).toFixed(2)} ${(y + 5.6).toFixed(2)} l ${(r1X + 7.0).toFixed(2)} ${(y + 3.8).toFixed(2)} l ${(r1X + 7.8).toFixed(2)} ${(y + 4.6).toFixed(2)} l ${(r1X + 8.2).toFixed(2)} ${(y + 2.1).toFixed(2)} l ${(r1X + 5.7).toFixed(2)} ${(y + 1.7).toFixed(2)} l S`);
  r1X += iconD + iconGap;

  regular(phone, r1X, y, cSize, DARK);
  addLink(r1X, y, phoneW, cSize + 2, 'tel:+919274118773');
  r1X += phoneW;

  regular('  |  ', r1X, y, cSize, LIGHT_DIV);
  r1X += sepW;

  // Email vector icon: teal circle with white envelope
  circle(r1X + 6.2, y + 3.2, 5.8, TEAL);
  // White envelope inside
  const envX = r1X + 3.0;
  const envY = y + 0.8;
  ops.push(`1 1 1 RG 0.75 w 1 j 0 J`);
  ops.push(`${envX.toFixed(2)} ${envY.toFixed(2)} 6.5 4.8 re S`);
  ops.push(`${envX.toFixed(2)} ${(envY + 4.8).toFixed(2)} m ${(envX + 3.25).toFixed(2)} ${(envY + 2.2).toFixed(2)} l ${(envX + 6.5).toFixed(2)} ${(envY + 4.8).toFixed(2)} l S`);
  r1X += iconD + iconGap;

  regular(email, r1X, y, cSize, DARK);
  addLink(r1X, y, emailW, cSize + 2, 'mailto:mitulpadhiyar0369@gmail.com');
  y -= 22;

  // 5. Contact Row 2: LinkedIn + GitHub with vector icons
  const lkText = 'linkedin.com/in/mitul-padhiyar';
  const ghText = 'github.com/mitulpadhiyar369';
  const lkW = measureText(lkText, cSize, false);
  const ghW = measureText(ghText, cSize, false);

  const row2TotalW = iconD + iconGap + lkW + sepW + iconD + iconGap + ghW;
  let r2X = (W - row2TotalW) / 2;

  // LinkedIn vector icon: blue rounded square with "in"
  const lkSqX = r2X + 1.2;
  const lkSqY = y - 1.5;
  ops.push(`${LINKEDIN_BL} rg`);
  ops.push(`${lkSqX.toFixed(2)} ${lkSqY.toFixed(2)} 10.2 10.2 re f`);
  bold('in', lkSqX + 2.1, lkSqY + 2.3, 6.4, '1 1 1');
  r2X += iconD + iconGap;

  regular(lkText, r2X, y, cSize, DARK);
  addLink(r2X, y, lkW, cSize + 2, 'https://linkedin.com/in/mitul-padhiyar');
  r2X += lkW;

  regular('  |  ', r2X, y, cSize, LIGHT_DIV);
  r2X += sepW;

  // GitHub vector icon: dark circle
  circle(r2X + 6.2, y + 3.2, 5.8, DARK);
  circle(r2X + 6.2, y + 3.0, 2.6, '1 1 1');
  ops.push(`${DARK} rg`);
  ops.push(`${(r2X + 4.9).toFixed(2)} ${(y + 3.6).toFixed(2)} 2.6 1.9 re f`);
  r2X += iconD + iconGap;

  regular(ghText, r2X, y, cSize, DARK);
  addLink(r2X, y, ghW, cSize + 2, 'https://github.com/mitulpadhiyar369');

  // Space before sections
  y -= 36;

  // ════════════════════════════════════════════════════════════════════════
  // ── SECTION HEADER HELPER ───────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  const secHeadSize = 11.4;
  const secHeadTracking = 1.35;

  function addSection(title) {
    const titleW = measureText(title, secHeadSize, true, secHeadTracking);
    bold(title, mL, y, secHeadSize, NAVY, secHeadTracking);
    // Horizontal line spanning from title end to right margin
    const lineX = mL + titleW + 9;
    hLine(lineX, W - mR, y + 3.5, RULE_STROKE, 1.1);
    y -= 22;
  }

  const bodySize = 10.4;
  const bodyLineH = 19.5;
  const secGap = 36; // Space between sections to fill the A4 height

  // ════════════════════════════════════════════════════════════════════════
  // ── 1. PROFESSIONAL SUMMARY ─────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('PROFESSIONAL SUMMARY');

  const summary = [
    'Passionate and highly motivated B.Sc. Computer Science student with a strong interest in modern web',
    'development and responsive UI design. Skilled in C, HTML5, CSS3, JavaScript, and React.js. Developed and',
    'deployed a personal portfolio website while continuously learning modern frontend technologies, Git, GitHub,',
    'and AI-assisted development. A quick learner with strong problem-solving skills and a passion for creating',
    'clean, user-friendly web experiences.'
  ];
  for (const line of summary) {
    regular(line, mL, y, bodySize, DARK);
    y -= bodyLineH;
  }
  y -= (secGap - bodyLineH);

  // ════════════════════════════════════════════════════════════════════════
  // ── 2. TECHNICAL SKILLS ─────────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('TECHNICAL SKILLS');

  const skills = [
    { label: 'Languages:', val: 'C, JavaScript' },
    { label: 'Tools:', val: 'Git, GitHub, VS Code' },
    { label: 'Web Technologies:', val: 'HTML5, CSS3, React.js, Responsive Web Design' },
    { label: 'Concepts:', val: 'Responsive Design, UI Development, Version Control' }
  ];
  const skillLineH = 21.0;
  for (const item of skills) {
    const lblW = measureText(item.label, bodySize, true) + 5;
    bold(item.label, mL, y, bodySize, NAVY);
    regular(item.val, mL + lblW, y, bodySize, DARK);
    y -= skillLineH;
  }
  y -= (secGap - skillLineH);

  // ════════════════════════════════════════════════════════════════════════
  // ── 3. ACADEMIC PROJECT ─────────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('ACADEMIC PROJECT');

  const projTitle = 'Personal Portfolio Website';
  const projSize = 11.2;
  bold(projTitle, mL, y, projSize, TEAL);
  addLink(mL, y, measureText(projTitle, projSize, true), projSize + 2, 'https://mitulpadhiyar369.github.io/portfolio/');
  y -= 21;

  const projBullets = [
    'Designed and developed a fully responsive portfolio using React.js.',
    'Added smooth animations, modern UI, dark/light mode, and mobile-friendly layouts.',
    'Integrated clickable GitHub, LinkedIn, Email, and Resume links.',
    'Deployed using GitHub Pages.'
  ];
  const projLineH = 19.5;
  for (const b of projBullets) {
    bullet(mL + 5, y);
    regular(b, mL + 16, y, bodySize, DARK);
    y -= projLineH;
  }
  y -= (secGap - projLineH);

  // ════════════════════════════════════════════════════════════════════════
  // ── 4. EDUCATION ────────────────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('EDUCATION');

  bold('Bachelor of Science (Computer Science)', mL, y, bodySize, NAVY);
  y -= 20;
  regular('M.B. Patel Science College, Anand — Affiliated with Sardar Patel University', mL, y, bodySize, DARK);
  y -= secGap;

  // ════════════════════════════════════════════════════════════════════════
  // ── 5. CERTIFICATION ────────────────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('CERTIFICATION');

  bullet(mL + 5, y);
  regular('Claude AI Certificate', mL + 16, y, bodySize, DARK);
  y -= secGap;

  // ════════════════════════════════════════════════════════════════════════
  // ── 6. ADDITIONAL INFORMATION ──────────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  addSection('ADDITIONAL INFORMATION');

  const col1 = ['Quick Learner', 'Problem Solving', 'Team Collaboration'];
  const col2 = ['Self-Motivated', 'Web Development', 'AI & Modern Technologies'];

  const addStartY = y;
  const addLineH = 21.0;
  const colMid = W / 2; // 297.64 pt

  // Column 1
  let c1y = addStartY;
  for (const item of col1) {
    bullet(mL + 5, c1y);
    regular(item, mL + 16, c1y, bodySize, DARK);
    c1y -= addLineH;
  }

  // Column 2
  let c2y = addStartY;
  const col2X = colMid + 18;
  for (const item of col2) {
    bullet(col2X + 5, c2y);
    regular(item, col2X + 16, c2y, bodySize, DARK);
    c2y -= addLineH;
  }

  // Vertical divider between the two columns
  const divTop = addStartY + 6;
  const divBottom = Math.min(c1y, c2y) + 8;
  vLine(colMid, divTop, divBottom, LIGHT_DIV, 0.8);

  const finalBottomY = divBottom;
  console.log(`Page layout complete. Bottom element ends at Y = ${finalBottomY.toFixed(1)} pt (Bottom margin: ${finalBottomY.toFixed(1)} pt).`);

  // ════════════════════════════════════════════════════════════════════════
  // ── ASSEMBLE PDF STREAM AND OBJECTS ─────────────────────────────────────
  // ════════════════════════════════════════════════════════════════════════
  const contentStream = ops.join('\n');
  const streamLen = Buffer.byteLength(contentStream, 'utf-8');

  const annotsStr = annots.length > 0 ? `/Annots [ ${annots.join(' ')} ]` : '';

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Contents 4 0 R ${annotsStr} /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
  ];

  const header = '%PDF-1.4\n';
  const offsets = [];
  let offset = Buffer.byteLength(header, 'utf-8');

  for (const obj of objects) {
    offsets.push(offset);
    offset += Buffer.byteLength(obj, 'utf-8');
  }

  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF\n`;
  const pdf = header + objects.join('') + xref + trailer;

  // Write to src/assets and public
  const srcPath = path.join(__dirname, '..', 'src', 'assets', 'Mitul_Padhiyar_Resume.pdf');
  const pubPath = path.join(__dirname, '..', 'public', 'Mitul_Padhiyar_Resume.pdf');

  fs.writeFileSync(srcPath, pdf, 'binary');
  fs.writeFileSync(pubPath, pdf, 'binary');

  console.log('✅ High-quality ATS-friendly PDF generated:');
  console.log('   src/assets:', srcPath);
  console.log('   public:    ', pubPath);
  console.log(`   Size: ${(Buffer.byteLength(pdf) / 1024).toFixed(2)} KB`);
}

buildResumePdf();
