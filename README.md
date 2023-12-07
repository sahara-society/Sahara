# _SAHARA- The Social Welfare Society_ Website

Official Website of Sahara society

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Getting Started](getting-started)
-   [Contact](#contact)

## About

This is the official website of Sahara society. It is a social welfare society of the IIT Madras BS Degree Program. It's mission is to extend assistance to those in need by providing opportunities to those willing to lend a hand. In doing so, we address the needs of both the underprivileged individuals and the students pursuing their BS Degree at IIT Madras.

## Features

-   [x] **Home Page**
-   [ ] **About Us**
-   [ ] **Activities**
-   [ ] **Events**
-   [ ] **Our Team**
-   [ ] **Contact**

### Tasks
- [x] **Color Theme**
- [x] **Footer**
- [x] **Icons**
- [ ] **LinkedIn link**
- [ ] **Font**
- [ ] **Illustrations**
- [ ] **Responsiveness**
- [ ] **Mail service for contact**
- [ ] Activities & Events will have carousel
- [ ] Activities border left
- [ ]  Activities text left
- [ ] Animations left

## Project Structure

```bash
root/
│
├── css/
│   ├── style.css
│   ├── home.css
│   ├── about.css
│   ├── activities.css
│   ├── events.css
│   ├── team.css
│   └── contact.css
│
├── images/
│
├── js/
│   └── main.js
│
├── home.html
│
├── about.html
│
├── activities.html
│
├── events.html
│
├── team.html
│
└── contact.html

```

### Code details

-   [style.css](./css/style.css) contains `header`, `footer` and other common styles for all pages.
-   [main.js](./js/main.js) is for handling `header`, `footer` and other common functionalities.
-   **Color theme used**:
    ```css
    --color-primary: #2B124C;
    --color-secondary: #522B5B;
    --color-light1: #854F6C;
    --color-light2: #DFB6B2;
    --color-dark: #190019;
    --color-offwhite: #FBE4D8;
    --color-black: #000000;
    --color-white: #ffffff;
    ```

---

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo

    ```bash
    git clone https://github.com/sahara-society/Sahara.git
    ```

2. Open the `index.html` file in your browser.
3. Create an http server using python
    ```bash
    python -m http.server 3000
    ```
4. Open [localhost:3000](http://0.0.0.0:3000/) in your browser.

## Contact

-   To Contact, please drop an email to [connectwithsahara@study.iitm.ac.in](mailto:connectwithsahara@study.iitm.ac.in)
