const fs = require('fs');
const file = 'resources/views/inspector/dashboard.blade.php';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove Add Record button
content = content.replace(/<button class="btn-primary-g" onclick="openAddModal\(\)">[\s\S]*?<\/button>/, '');

// 2. Remove ADD/EDIT MODAL
content = content.replace(/<!-- ══════════════════════════════════════════\s*ADD \/ EDIT MODAL\s*══════════════════════════════════════════ -->[\s\S]*?<\/form>\s*<\/div>\s*<\/div>/, '');

// 3. Remove Edit button from Detail Modal
content = content.replace(/<button type="button" class="btn-sm-g btn-edit".*?id="detailEditBtn">.*?<\/button>/, '');

// 4. Remove DELETE CONFIRM MODAL
content = content.replace(/<!-- ══════════════════════════════════════════\s*DELETE CONFIRM MODAL\s*══════════════════════════════════════════ -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, '');

// 5. Remove Edit/Delete buttons from Cards View
content = content.replace(/<button class="btn-sm-g btn-edit".*?<\/button>\s*<button class="btn-sm-g btn-del".*?<\/button>/, '');

// 6. Remove Edit/Delete buttons from Table View
content = content.replace(/<button class="btn-sm-g btn-edit".*?<\/button>\s*<button class="btn-sm-g btn-del".*?<\/button>/, '');

// 7. Remove Add First Record button
content = content.replace(/<button class="btn-primary-g mt-3 mx-auto".*?onclick="openAddModal\(\)".*?<\/button>/, '');

// 8. Update detailEditBtn js assignment
content = content.replace(/document\.getElementById\('detailEditBtn'\)\.onclick = \(\) => openEditModal\(id\);/, '');

// 9. Update title
content = content.replace(/<title>Nalanda Admin — TC Records<\/title>/, '<title>Nalanda Inspector — TC Records</title>');
content = content.replace(/Admin Panel v1\.0/, 'Inspector Panel v1.0');
content = content.replace(/<div class="admin-avatar">AD<\/div>/, '<div class="admin-avatar">IN<\/div>');

fs.writeFileSync(file, content);
console.log('Cleaned inspector dashboard');
