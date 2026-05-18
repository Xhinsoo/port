      const themeToggle = document.getElementById('themeToggle');
      const body = document.body;

      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
      }

      themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });