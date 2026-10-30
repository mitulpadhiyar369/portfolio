import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to escape PDF string
function escapePdf(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

// Generate valid, clean, vector PDF 1.4
function buildResumePdf() {
  const width = 595.28;
  const height = 841.89;
  const marginX = 45;

  let stream = [];

  // Colors
  const navy = '0.039 0.098 0.184';
  const teal = '0.008 0.518 0.780';
  const grayDark = '0.200 0.255 0.333';
  const grayMuted = '0.278 0.333 0.412';
  const lineStroke = '0.200 0.255 0.333';

  // White page background
  stream.push(`1 1 1 rg 0 0 ${width} ${height} re f`);

  // --- HEADER ---
  // Name
  stream.push(`BT /F2 22 Tf ${navy} rg 1 0 0 1 200 792 Tm (${escapePdf('MITUL PADHIYAR')}) Tj ET`);

  // Subtitle
  stream.push(`BT /F2 11.5 Tf ${teal} rg 1 0 0 1 236 773 Tm (${escapePdf('WEB DEVELOPER')}) Tj ET`);

  // Location
  stream.push(`BT /F1 9 Tf ${grayMuted} rg 1 0 0 1 247 758 Tm (${escapePdf('Anand, Gujarat, India')}) Tj ET`);

  // Contact line 1
  stream.push(`BT /F1 8.5 Tf ${navy} rg 1 0 0 1 175 742 Tm (${escapePdf('+91 92741 18773    |    mitulpadhiyar0369@gmail.com')}) Tj ET`);

  // Contact line 2
  stream.push(`BT /F1 8.5 Tf ${navy} rg 1 0 0 1 155 728 Tm (${escapePdf('linkedin.com/in/mitul-padhiyar    |    github.com/mitulpadhiyar369')}) Tj ET`);

  let currentY = 705;

  // Function to add a section header
  function addSectionHeader(title, textWidthEstimate) {
    stream.push(`BT /F2 9.5 Tf ${navy} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf(title)}) Tj ET`);
    const lineStartX = marginX + textWidthEstimate + 10;
    const lineEndX = width - marginX;
    stream.push(`${lineStroke} RG 0.75 w ${lineStartX} ${currentY + 3.5} m ${lineEndX} ${currentY + 3.5} l S`);
    currentY -= 15;
  }

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('PROFESSIONAL SUMMARY', 145);
  const summaryLines = [
    "Passionate and highly motivated B.Sc. Computer Science student with a strong interest in modern web",
    "development and responsive UI design. Skilled in C, HTML5, CSS3, JavaScript, and React.js. Developed and",
    "deployed a personal portfolio website while continuously learning modern frontend technologies, Git, GitHub,",
    "and AI-assisted development. A quick learner with strong problem-solving skills and a passion for creating",
    "clean, user-friendly web experiences."
  ];
  for (const line of summaryLines) {
    stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf(line)}) Tj ET`);
    currentY -= 12.5;
  }
  currentY -= 8;

  // 2. TECHNICAL SKILLS
  addSectionHeader('TECHNICAL SKILLS', 105);
  const skills = [
    { label: 'Languages:', val: 'C, JavaScript' },
    { label: 'Tools:', val: 'Git, GitHub, VS Code' },
    { label: 'Web Technologies:', val: 'HTML5, CSS3, React.js, Responsive Web Design' },
    { label: 'Concepts:', val: 'Responsive Design, UI Development, Version Control' }
  ];
  for (const item of skills) {
    stream.push(`BT /F2 8.5 Tf ${navy} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf(item.label)}) Tj ET`);
    const labelWidth = item.label.length * 5.2 + 8;
    stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX + labelWidth} ${currentY} Tm (${escapePdf(item.val)}) Tj ET`);
    currentY -= 13;
  }
  currentY -= 8;

  // 3. ACADEMIC PROJECT
  addSectionHeader('ACADEMIC PROJECT', 115);
  stream.push(`BT /F2 9 Tf ${teal} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf('Personal Portfolio Website')}) Tj ET`);
  currentY -= 13;

  const projectBullets = [
    "Designed and developed a fully responsive portfolio using React.js.",
    "Added smooth animations, modern UI, dark/light mode, and mobile-friendly layouts.",
    "Integrated clickable GitHub, LinkedIn, Email, and Resume links.",
    "Deployed using GitHub Pages."
  ];
  for (const b of projectBullets) {
    // Bullet dot
    stream.push(`0.2 0.255 0.333 rg ${marginX + 6} ${currentY + 2.5} 1.8 1.8 re f`);
    stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX + 16} ${currentY} Tm (${escapePdf(b)}) Tj ET`);
    currentY -= 12.5;
  }
  currentY -= 8;

  // 4. EDUCATION
  addSectionHeader('EDUCATION', 72);
  stream.push(`BT /F2 9 Tf ${navy} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf('Bachelor of Science (Computer Science)')}) Tj ET`);
  currentY -= 12;
  stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdf('M.B. Patel Science College, Anand — Affiliated with Sardar Patel University')}) Tj ET`);
  currentY -= 19;

  // 5. CERTIFICATION
  addSectionHeader('CERTIFICATION', 86);
  stream.push(`0.2 0.255 0.333 rg ${marginX + 6} ${currentY + 2.5} 1.8 1.8 re f`);
  stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX + 16} ${currentY} Tm (${escapePdf('Claude AI Certificate')}) Tj ET`);
  currentY -= 20;

  // 6. ADDITIONAL INFORMATION
  addSectionHeader('ADDITIONAL INFORMATION', 158);
  const col1 = ['Quick Learner', 'Problem Solving', 'Team Collaboration'];
  const col2 = ['Self-Motivated', 'Web Development', 'AI & Modern Technologies'];

  const startY = currentY;
  let col1Y = startY;
  for (const item of col1) {
    stream.push(`0.2 0.255 0.333 rg ${marginX + 6} ${col1Y + 2.5} 1.8 1.8 re f`);
    stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${marginX + 16} ${col1Y} Tm (${escapePdf(item)}) Tj ET`);
    col1Y -= 13;
  }

  // Vertical line between columns
  stream.push(`0.7 0.7 0.7 RG 0.75 w 285 ${startY + 8} m 285 ${startY - 35} l S`);

  let col2Y = startY;
  for (const item of col2) {
    stream.push(`0.2 0.255 0.333 rg 305 ${col2Y + 2.5} 1.8 1.8 re f`);
    stream.push(`BT /F1 8.5 Tf ${grayDark} rg 1 0 0 1 ${315} ${col2Y} Tm (${escapePdf(item)}) Tj ET`);
    col2Y -= 13;
  }

  const contentStream = stream.join('\n');
  const streamLength = Buffer.byteLength(contentStream, 'utf-8');

  // Build PDF Objects
  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  let header = '%PDF-1.4\n';
  let offsets = [];
  let currentOffset = Buffer.byteLength(header, 'utf-8');

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  const xrefOffset = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
  }

  let trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const finalPdf = header + objects.join('') + xref + trailer;

  // Write to src/assets and public
  const srcAssetsPath = path.join(__dirname, '..', 'src', 'assets', 'Mitul_Padhiyar_Resume.pdf');
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicPath = path.join(publicDir, 'Mitul_Padhiyar_Resume.pdf');

  fs.writeFileSync(srcAssetsPath, finalPdf, 'utf-8');
  fs.writeFileSync(publicPath, finalPdf, 'utf-8');
  console.log('PDF successfully generated at:', srcAssetsPath, 'and', publicPath);
}

buildResumePdf();
