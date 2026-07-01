const fs = require('fs');
const file = 'resources/views/inspector/dashboard.blade.php';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove detailEditBtn correctly (handling newlines)
content = content.replace(/<button type="button" class="btn-sm-g btn-edit"[\s\S]*?id="detailEditBtn">[\s\S]*?<\/button>/, '');

// 2. Remove the Dashboard nav item
content = content.replace(/<a class="nav-item" onclick="showPage\('dashboard'\)">[\s\S]*?<\/a>/, '');

// 3. Add an indicator to the topbar that this is the Inspector Dashboard
// It currently has: <span class="topbar-badge"><i class="bi bi-shield-check me-1"></i>CBSE Verified</span>
// Let's change the topbar badge to say "Inspector View"
content = content.replace(
  /<span class="topbar-badge">.*?CBSE Verified.*?<\/span>/,
  '<span class="topbar-badge" style="background:var(--gold);color:var(--ink);"><i class="bi bi-eye me-1"></i>Inspector View</span>'
);

// 4. Update the page title if it still says Admin Dashboard anywhere
content = content.replace(/Admin Dashboard/g, 'Inspector Dashboard');
content = content.replace(/<title>Nalanda Admin — TC Records<\/title>/g, '<title>Nalanda Inspector — TC Records</title>');

fs.writeFileSync(file, content);
console.log('Fixed inspector dashboard');
