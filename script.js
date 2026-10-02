/* ========================================
   ПОРТФОЛИО — ЛОГИКА ИНТЕРФЕЙСА
   Тема, модальные окна, галерея, анимации и форма
======================================== */

const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeText = themeToggle?.querySelector('.theme-toggle__text');
const themeIcon = themeToggle?.querySelector('.theme-toggle__icon');

/* ========================================
   СМЕНА ТЕМЫ
======================================== */

function applyTheme(theme) {
  const isDark = theme === 'dark';

  root.dataset.theme = theme;
  root.style.colorScheme = isDark ? 'dark' : 'light';
  document.body.classList.toggle('dark-theme', isDark);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Включить светлую тему' : 'Включить тёмную тему'
    );
  }

  if (themeText) {
    themeText.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
  }

  if (themeIcon) {
    themeIcon.textContent = isDark ? '☀' : '☾';
  }
}

function setupThemeToggle() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-theme')
      ? 'light'
      : 'dark';

    localStorage.setItem('portfolio-theme', nextTheme);
    applyTheme(nextTheme);
  });
}

/* ========================================
   ДАННЫЕ ПРОЕКТОВ
======================================== */

const projects = {
  appleFigma: {
    type: 'UI/UX design · Figma · E-commerce',
    title: 'Apple Store — UI-концепт',
    description:
      'Учебный дизайн-макет главной страницы интернет-магазина техники Apple. Проект выполнен в Figma и посвящён визуальной структуре, интерфейсу и подаче товара.',
    blocks: [
      {
        title: 'Что спроектировано',
        values: [
          'Верхняя навигация и информационный блок доставки',
          'Промо-баннер iPhone',
          'Карточки популярных категорий',
          'Карточки товаров',
          'Рекламные баннеры',
          'Подписка на рассылку и футер'
        ]
      },
      {
        title: 'Визуальное решение',
        values: [
          'Сине-бело-чёрная цветовая палитра',
          'Чистая сетка и аккуратные отступы',
          'Крупные продуктовые изображения',
          'Единый стиль кнопок и карточек'
        ]
      },
      {
        title: 'Инструмент',
        values: ['Figma']
      },
      {
        title: 'Чему я научился',
        values: [
          'Проектировать главную страницу интернет-магазина',
          'Выстраивать визуальную иерархию',
          'Работать с карточками и промо-блоками',
          'Создавать цельную дизайн-систему'
        ]
      }
    ]
  },

  appleSite: {
    type: 'Интернет-магазин · Frontend · Web development',
    title: 'Apple Store — готовый сайт',
    description:
      'Командный учебный проект Никиты Яковука и Юрия Лашманова. Реализованный интернет-магазин техники Apple с каталогом, поиском, фильтрацией и интерактивной корзиной.',
    blocks: [
      {
        title: 'Что реализовано',
        values: [
          'Главная страница',
          'Каталог товаров',
          'Страница корзины',
          'Страница «О нас»',
          'Поиск и фильтрация товаров'
        ]
      },
      {
        title: 'Функциональность',
        values: [
          'Добавление и удаление товаров из корзины',
          'Сохранение корзины через LocalStorage',
          'Светлая и тёмная темы',
          'Слайдеры и анимации',
          'Адаптивная вёрстка'
        ]
      },
      {
        title: 'Технологии',
        values: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage']
      },
      {
        title: 'Чему я научился',
        values: [
          'Превращать дизайн в работающий интерфейс',
          'Работать с состоянием корзины',
          'Создавать пользовательские сценарии',
          'Адаптировать сайт под разные устройства'
        ]
      }
    ]
  },

  pipotam: {
    type: 'Игра · Python · Pygame',
    title: 'Выращивание Пипотама',
    description:
      'Учебная игра в жанре виртуального питомца. Игрок заботится о Пипотаме, следит за его состоянием, получает опыт и повышает уровень персонажа.',
    blocks: [
      {
        title: 'Концепция игры',
        values: [
          'Игрок ухаживает за виртуальным питомцем',
          'Характеристики со временем изменяются',
          'За полезные действия начисляется опыт',
          'С ростом уровня Пипотам становится больше'
        ]
      },
      {
        title: 'Игровые комнаты',
        values: [
          'Кухня — восстановление сытости',
          'Ванная — повышение чистоты',
          'Туалет — уменьшение заполненности бака',
          'Сон — восстановление энергии',
          'Игра — повышение счастья'
        ]
      },
      {
        title: 'Механики',
        values: [
          'Перетаскивание еды к питомцу',
          'Использование губки и душа',
          'Использование туалетной бумаги и смыва',
          'Выключение света для сна',
          'Мини-игра «3 в ряд»',
          'Звуки и фоновая музыка'
        ]
      },
      {
        title: 'Технологии',
        values: [
          'Python',
          'Pygame',
          'Работа с графикой',
          'Обработка мыши и клавиатуры',
          'Сохранение прогресса в JSON'
        ]
      }
    ],
    gallery: [
      {
        image: 'pipotam-main.jpg',
        title: 'Главная комната',
        text: 'Основной экран с Пипотамом, показателями состояния, уровнем и панелью переключения комнат.'
      },
      {
        image: 'pipotam-kitchen.jpg',
        title: 'Кухня',
        text: 'Игрок перетаскивает еду к Пипотаму, чтобы восстановить сытость.'
      },
      {
        image: 'pipotam-bathroom.jpg',
        title: 'Ванная',
        text: 'С помощью губки и душа игрок повышает показатель чистоты питомца.'
      },
      {
        image: 'pipotam-toilet.jpg',
        title: 'Туалет',
        text: 'Игровой сценарий с туалетной бумагой и кнопкой смыва.'
      },
      {
        image: 'pipotam-sleep.jpg',
        title: 'Комната сна',
        text: 'Выключатель света запускает восстановление энергии питомца.'
      },
      {
        image: 'pipotam-match3.jpg',
        title: 'Мини-игра «3 в ряд»',
        text: 'Отдельный игровой режим, который увеличивает счастье Пипотама и даёт очки.'
      }
    ]
  },

  trainer: {
    type: 'Web application · Educational game · PHP',
    title: 'Веб-тренажёр дизайнерских навыков',
    description:
      'Учебное веб-приложение с мини-играми для развития чувства цвета, контраста и отступов. В проекте объединены игровые механики, интерфейс, система результатов и PHP-логика.',
    blocks: [
      {
        title: 'Три режима',
        values: [
          'Подбор оттенка для персонажа, бренда или изображения',
          'Подбор контрастной пары',
          'Выбор правильных отступов между элементами',
          'Объяснение правильного ответа после прохождения уровня'
        ]
      },
      {
        title: 'Что реализовано',
        values: [
          'Игровые механики и уровни',
          'Система подсчёта очков',
          'Авторизация и выход из аккаунта',
          'Сохранение результатов',
          'Таблица лидеров'
        ]
      },
      {
        title: 'Технологии',
        values: ['HTML', 'CSS', 'JavaScript', 'PHP']
      },
      {
        title: 'Чему я научился',
        values: [
          'Превращать учебную тему в интерактивную механику',
          'Проектировать игровые сценарии',
          'Работать с серверными PHP-страницами',
          'Тестировать и улучшать веб-приложение'
        ]
      }
    ]
  }
};

/* ========================================
   МОДАЛЬНОЕ ОКНО ПРОЕКТОВ
======================================== */

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalType = document.getElementById('modal-type');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalContent = document.getElementById('modal-content');

let lastFocusedElement = null;

function createInfoBlocks(project) {
  return project.blocks
    .map(
      (block) => `
        <section class="modal-block">
          <h4>${block.title}</h4>
          <ul>
            ${block.values.map((value) => `<li>${value}</li>`).join('')}
          </ul>
        </section>
      `
    )
    .join('');
}

function createGallery(project) {
  if (!project.gallery || project.gallery.length === 0) {
    return '';
  }

  const cards = project.gallery
    .map(
      (item) => `
        <figure class="gallery-item">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <figcaption>
            <strong>${item.title}</strong>
            <span>${item.text}</span>
          </figcaption>
        </figure>
      `
    )
    .join('');

  return `
    <section class="project-gallery">
      <div class="gallery-heading">
        <p class="eyebrow">Галерея</p>
        <h3>Как выглядит игра.</h3>
      </div>

      <div class="gallery-grid">
        ${cards}
      </div>
    </section>
  `;
}

function openModal(projectId) {
  const project = projects[projectId];

  if (!project || !modal) {
    return;
  }

  lastFocusedElement = document.activeElement;

  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  modalContent.innerHTML = `
    <div class="modal-info-grid">
      ${createInfoBlocks(project)}
    </div>
    ${createGallery(project)}
  `;

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  modalClose?.focus();
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus();
}

function setupProjectButtons() {
  document.querySelectorAll('.details').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.project);
    });
  });
}

function setupModal() {
  modalClose?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ========================================
   АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ
======================================== */

function setupRevealAnimation() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

/* ========================================
   ФОРМА ОБРАТНОЙ СВЯЗИ
======================================== */

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (!form || !formMessage) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Заполните имя, e-mail и сообщение.';
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formMessage.textContent = 'Проверьте, правильно ли указан e-mail.';
      return;
    }

    formMessage.textContent = 'Спасибо! Для связи используйте e-mail или Telegram, указанные слева.';
    form.reset();
  });
}

/* ========================================
   ЗАПУСК
======================================== */

setupThemeToggle();
setupProjectButtons();
setupModal();
setupRevealAnimation();
setupContactForm();
