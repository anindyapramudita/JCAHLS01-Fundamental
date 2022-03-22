# Introduce Git and Github
## ⏺ Git
Merupakan bagian dari SCM(Source Code Management) yang ada pada local storage / pc.

## ⏺ Github
Management program secara online. Sehingga, program / code yang kita miliki bisa kita share secara umum / open-source.

---
## Bagian pada git
1. Modified/Changes
   * Lokasi git untuk merecord perubahan yang dilakukan pada file
   * Record perubahan, record penambahan file, dan record pengurangan file
2. Staged
   * Bagian dari git untuk menyiapkan file apa saja yang akan kita simpan ke dalam git
3. Commited
   * Bagian dari git untuk menyimpan perubahan pada file project kita

---
## Konfigurasi Git
>Menghubungkan git dengan github
- Konfigurasi username : git config --global user.name "username_github"
- Konfigurasi email : git config --global user.email "email@github"

>Menyiapkan project untuk menggunakan git
1. Initialisasi git / mengaktifkan git pada project kita
   - git init
2. Melihat status git pada project
   - git status
3. Memindahkan ke staged session
   - git add nama_file : jika file spesifik
   - git add . : jika semua file
4. Menyimpan perubahan di commited session / ke dalam git
   - git commit -m "pesan mengenai perubahan yang dilakukan"
5. Melihat history commit
   - git log