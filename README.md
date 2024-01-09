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
-   [x] **About Us**
-   [x] **Activities**
-   [ ] **Events**
-   [x] **Our Team**
-   [x] **Contact**

### Tasks
- [x] **Color Theme**
- [x] **Footer**
- [x] **Icons**
- [ ] **Button anchor link full**
- [x] **LinkedIn link**
- [x] **Font**
- [ ] **Illustrations**
- [ ] **Responsiveness**
- [x] **Mail service for contact**
- [ ] **Activities & Events will have carousel**
- [x] **Activities border left**
- [ ] **Animations left**
- [ ] **Images for About**
- [ ] **Images for Activities**
- [ ] **Images for Events**
- [ ] **Profile details of Team**
- [ ] **Arrow after intro of About, Activities, Our Team**

Sahara society [details](https://docs.google.com/document/d/1drGVoKkkfh10SDM7KmOImB4YgmmDTpI6uM_bUcFdoPI/edit?pli=1)

#### Text left
- [ ] What we do in about
- [ ] Social Activities heading
- [ ] Description of each activity
- [ ] Bullets of each activity
- [ ] Testimonials of each activity

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
