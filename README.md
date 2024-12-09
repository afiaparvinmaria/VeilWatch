# VeilWatch - Crime Map Application

**VeilWatch** is an advanced crime mapping application designed to provide a visual representation of crime incidents in urban areas, with an initial focus on **Dhaka City**. Built with **Django** and **Leaflet.js**, it allows users to explore crime data, report incidents, and make informed decisions about safety.

---

## 🌟 Features
- Interactive map to display crime locations using **Leaflet.js**.
- User-friendly dashboards for admins and users.
- Real-time crime reporting and visualization.
- Role-based access control for enhanced security.
- Centralized **app_location** table for optimized database management.
- Distributed database system using MySQL for scalability.

---

## 🚀 Getting Started

### Prerequisites
- **Python 3.8+**
- **MySQL**
- **XAMPP** (for local MySQL server)
- **Node.js** (for managing static assets, optional)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/afiaparvinmaria/VeilWatch.git
   cd VeilWatch
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure the database in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'veilwatch',
           'USER': 'your_user',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. Apply migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Usage
- Visit `http://127.0.0.1:8000` in your browser.
- Explore the map or log in to access user/admin dashboards.

---

## 🗂️ Project Structure
```
VeilWatch/
├── app/                 # Core application
│   ├── templates/       # HTML templates
│   ├── static/          # Static files (CSS, JS, images)
│   ├── migrations/      # Database migrations
├── crimemap/            # Django project settings
├── requirements.txt     # Python dependencies
└── manage.py            # Django CLI entry point
```

---

## 🤝 Contributors
This project is brought to life by a dedicated team of developers:

### Backend Developers:
- [Shakib Hassan (Lead Developer)](https://github.com/shakib-h)
- [Afia Parvin Maria](https://github.com/afiaparvinmaria)

### Frontend Developers:
- [Zarin Ayesha](https://github.com/Zarinays)
- [Mahbuba Islam Mim](https://github.com/MahbubaMim)
- [Mohima Akter Reem](https://github.com/mohima19)

---

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
