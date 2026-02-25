export function buildRecipePreviewHtml(processedHtml, siteId) {
  return `
        <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      rel="stylesheet"
      href="https://fritel-scripts.uptodatesites.com/styles.css"
    />
    <link
      href="https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,600i"
      id="selected-fonts"
      rel="stylesheet"
      type="text/css"
    />

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,600i|Lato:normal,normali,600,600i|Lexend:700,700i,600,600i"
      rel="stylesheet"
    />

    <!-- Theme Styles -->
    <style>
      body {
        font-weight: 400;
      }
      h1 {
        font-family: "Lexend", serif;
        font-weight: 700;
        font-size: 50px;
        color: #333333;
      }
      h2 {
        font-family: "Lato", serif;
        font-weight: 700;
        font-size: 40px;
        color: #333333;
      }
      h3 {
        font-family: "Lato", serif;
        font-weight: 700;
        font-size: 24px;
        color: #474747;
      }
      h4 {
        font-family: "Lato", serif;
        font-weight: 700;
        font-size: 18px;
        color: #333333;
      }
      h5 {
        font-family: "Lato", serif;
        font-weight: inherit;
        font-size: 16px;
        color: #000000;
      }
      h6 {
        font-family: "Lato", serif;
        font-weight: inherit;
        font-size: 14px;
        color: #000000;
      }
      #primary-menu {
        background-color: #d6001c;
      }
      #sub-footer {
        background-color: #d6001c;
      }
      :root {
        --body-font-family: "Raleway", serif;
        --body-font-color: #666666;
        --body-font-size: 16px;
        --body-link: #d6001c;
        --body-link-hover: #a50318;
        --body-line-height: 1.7em;
        --menu-font-size: 16px;
        --menu-icon-color: inherit;
        --menu-font-family: Lato;
        --menu-color: #000000;
        --menu-hover-link: inherit;
        --menu-hover-card: inherit;
        --menu-text-transform: normal;
        --footer-font-family: "Lato", serif;
        --footer-color: #ffffff;
        --footer-icon: #d6001c;
        --footer-font-size: 16px;
        --footer-link: #d6001c;
        --footer-link-hover: #a50318;
        --footer-line-height: 1.5em;
        --page-title-color: #000000 --page-title-font-size: 16px;
        --page-title-font-family: Lato;
        --page-title-line-height: 1.5;
        --page-title-link: #d6001c;
        --page-title-hover: #a50318;
        --sub-footer-font-family: "Lato", serif;
        --sub-footer-color: #000000;
        --sub-footer-icon: inherit;
        --sub-footer-font-size: 16px;
        --sub-footer-link: inherit;
        --sub-footer-link-hover: inherit;
        --sub-footer-line-height: 1.5em;
        --topbar-font-size: 53px;
        --topbar-icon-color: #d6001c;
        --topbar-font-family: Lato;
        --topbar-color: #000000;
        --container-max-width: 1200px;
        --theme: #d6001c;
        --block-padding: 9rem;
        --theme-hover: #a50318;
      }
    </style>

    <!-- Global Header Code -->
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

      :root {
        --body-font: "Raleway", sans-serif;
        --title-font: "Ubuntu", sans-serif;
        --flat-light-black: #393939;
        --post-image-padding: 7rem 0;
        --post-title-sm: 2rem;
        --light-theme-hover: #f3a4ae;
        --post-image-padding-xl: 15rem 0;
        --gray-subtle-300: var(--gray-30);
        --light-theme: #ffeff1;
      }

      body {
        color: var(--body-font-color);
        font-family: var(--body-font);
      }

      #preloader[data-gjs-type="default"] {
        display: none !important;
      }

      #main-content .hero .container {
        padding-top: 15rem;
      }

      /* CLASSES */
      .bg-flat-black {
        background-color: var(--gray-20);
      }

      .bg-flat-light-black {
        background-color: var(--flat-light-black);
        border-radius: 0.5rem;
      }

      .bg-light-theme {
        background-color: var(--light-theme);
      }

      .border-light-theme {
        border-color: var(--light-theme);
      }

      .border-gray-light {
        border-color: var(--gray-93);
      }

      .author {
        padding: 0.3rem 0.8rem;
        border-radius: 2px;
        border: 1px solid var(--gray-93);
        grid-gap: 0.5rem !important;
      }

      .author p,
      .author i,
      .author span {
        font-size: 1.2rem;
        color: var(--body-font-color);
      }

      .text-bold {
        font-weight: 700;
      }

      .circle-check {
        height: 25px !important;
        width: 25px !important;
      }

      .circle-check i {
        font-size: 1.2rem;
      }

      .text-nowrap {
        white-space: nowrap;
      }

      .footer-subtitle {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 20px;
      }

      .form-check {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        grid-gap: 1rem;
      }

      .form-check p {
        margin-left: 1rem;
        font-size: 1.2rem;
      }

      .form-check-input {
        margin-top: 0.8rem;
        width: 20px;
      }

      .form-group .btn {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.6rem;
        letter-spacing: 1.5px;
        border-radius: 0;
      }

      .form-group input {
        height: 45px;
        font-size: 1.4rem;
      }

      .logo-fade-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
        animation-delay: 2s;
      }

      .fade-up span {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
      }

      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-content {
        width: 80%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .post--in-out-style .post__read-more a,
      .post--outer-style .post__read-more a {
        border-radius: 0;
      }

      /*.button-blue,
  .bg-white .button-blue,
  .post--in-out-style .post__read-more a,
  .form-group .btn,
  .bg-theme .button-white,
  .post--outer-style .post__read-more a {
  	position: relative;
  	font-size: 1.5rem;
  }
  
  .button-blue:before,
  .bg-white .button-blue:before,
  .post--in-out-style .post__read-more a:before,
  .form-group .btn:before,
  .bg-theme .button-white:before,
  .post--outer-style .post__read-more a:before {
  	content: '';
    height: 7px;
    width: calc(100% - 36px);
    position: absolute;
    bottom: -7px;
    border-radius: 0;
    background-color: var(--white);
    opacity: .5;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    left: 18px;
  }
  
  .bg-white .button-blue:before,
  .post--in-out-style .post__read-more a:before,
  .form-group .btn:before,
  .post--outer-style .post__read-more a:before {
  	width: calc(100% - 25px);
  	background-color: var(--light-theme-hover);
  	left: 13px;
  }
  
  .button-blue:hover:before,
  .bg-white .button-blue:hover:before,
  .post--in-out-style .post__read-more a:hover:before,
  .form-group .btn:hover:before,
  .bg-theme .button-white:hover:before,
  .post--outer-style .post__read-more a:hover:before {
  	bottom: -6px;
    -webkit-transform: scale(.95);
    transform: scale(.95);
  }
  */

      .bg-white .button-blue,
      .bg-theme .button-blue,
      .form-group .btn,
      .bg-flat-black .button-blue,
      .hero-content .button-blue,
      .bg-theme .button-white,
      .jobs .post--in-out-style .post__read-more a,
      .persberichten .post--outer-style .post__read-more a {
        background-color: var(--theme);
        border: 1px solid var(--theme);
        color: var(--white);
        padding: 1.2rem 2.4rem;
        border-radius: 0.25rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .bg-theme .button-blue,
      .bg-flat-black .button-blue:hover,
      .hero-content .button-blue:hover,
      .bg-theme .button-white {
        background-color: var(--white) !important;
        border: 1px solid var(--white) !important;
        color: var(--theme);
      }

      .bg-white .button-blue:hover,
      .form-group .btn:hover,
      .jobs .post--in-out-style .post__read-more a:hover,
      .persberichten .post--outer-style .post__read-more a:hover {
        background-color: var(--gray-93) !important;
        border: 1px solid var(--gray-93) !important;
        color: var(--theme);
      }

      .bg-theme .button-blue:hover,
      .bg-theme .button-white:hover {
        background-color: var(--theme-hover) !important;
        border: 1px solid var(--theme-hover) !important;
        color: var(--white);
      }

      .newsletter-section,
      .newsletter-section-box {
        position: relative;
      }

      .newsletter-section:before,
      .newsletter-section-box:before,
      .bg-white .newsletter-section:before {
        content: "";
        height: 10px;
        width: calc(100% - 36px);
        position: absolute;
        bottom: -10px;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        background-color: var(--white);
        opacity: 1;
        left: 18px;
      }

      .newsletter-section-box:before,
      .bg-white .newsletter-section:before {
        background-color: var(--light-theme-hover);
      }

      .text-font {
        font-family: var(--title-font);
      }

      .sliding-text p {
        white-space: nowrap;
      }

      .sliding-text {
        animation: sliding-text-animate 30s linear infinite;
        grid-gap: 5rem;
      }

      @keyframes sliding-text-animate {
        0% {
          transform: translateX(0) translateZ(0);
        }

        100% {
          transform: translateX(-100%) translateZ(0);
        }
      }

      .circle-badge {
        width: auto;
        height: auto;
      }

      .circle-text {
        font-size: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        fill: #fff;
        animation: spin 12s linear infinite;
        transform-origin: 50% 50%;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* PULSE BUTTON */
      .cta-video a {
        width: 70px;
        height: 70px;
        background-color: var(--theme);
        padding: 0;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        box-sizing: content-box;
        border-radius: 50%;
        line-height: 80px;
        margin: 0 auto;
        left: 50%;
        top: 50%;
        z-index: 9;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cta-video a:before {
        background: var(--theme);
        content: "";
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        -webkit-animation: pulse-border 1500ms ease-out infinite;
        animation: pulse-border 1500ms ease-out infinite;
      }

      .cta-video a:after {
        content: "";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transition: all 200ms;
      }

      .cta-video a > i {
        position: relative;
        overflow: hidden;
      }

      .cta-video a:hover {
        background-color: var(--white);
      }

      .cta-video a:hover i {
        color: var(--theme) !important;
      }

      .cta-video a:hover:before {
        background-color: var(--white);
      }

      @keyframes pulse-border {
        0% {
          transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
          opacity: 1;
        }

        100% {
          transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
          opacity: 0;
        }
      }

      .contact-icon {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        display: inline-block;
        background-color: var(--theme);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
      }

      .contact-icon:after {
        position: absolute;
        content: "";
        left: -5px;
        bottom: -5px;
        width: 30px;
        height: 30px;
        z-index: -1;
        background-image: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/1-1766475122822.png");
      }

      .contact-icon i {
        font-size: 1.2rem !important;
      }

      /* WAVES */
      .waves {
        position: relative;
        width: 100%;
        height: 20vh;
        margin-bottom: -7px; /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
      }

      .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }

      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }

      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }

      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }

      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }

      @keyframes move-forever {
        0% {
          transform: translate3d(-90px, 0, 0);
        }
        100% {
          transform: translate3d(85px, 0, 0);
        }
      }

      /*Shrinking for mobile*/
      @media (max-width: 768px) {
        .waves {
          height: 40px;
          min-height: 40px;
        }
      }

      .box-letter {
        background-color: var(--gray-subtle-100);
      }

      .box-letter:before {
        position: absolute;
        content: "";
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        opacity: 0;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
        transform: scale(1, 0.2);
        background: var(--light-theme);
        border-radius: 1rem;
      }

      .box-letter:after {
        position: absolute;
        content: "";
        left: 0px;
        right: 0px;
        bottom: -10px;
        height: 40px;
        z-index: -1;
        opacity: 0;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
        transform: scale(0.1, 1);
        background-color: var(--theme-hover);
        border-radius: 1.5rem;
      }

      .box-letter p,
      .box-letter .box-icon,
      .box-letter .box-icon img {
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
      }

      .box-letter .box-icon {
        background: var(--theme);
      }

      /* HEADER */
      .header-main--dark {
        background-color: transparent;
      }

      .header-main--shrink {
        background-color: var(--theme);
      }

      /*.post-template-default .is-post .header-main .header-main__inner:before {
  	background: linear-gradient(to bottom, #272727a3, #4b4b4b61, transparent);
    height: 120px;
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
  }
  
  .post-template-default .is-post .header-main--shrink .header-main__inner:before {
  	height: 0;
  }*/

      .header-main__inner {
        border-bottom: 1px solid #ffffff1f;
      }

      .header-main__logo {
        max-height: 8rem;
      }

      .header-main--shrink .header-main__logo {
        max-height: 6.5rem;
        transition: all 0.2s ease-in-out;
      }

      .utd-header-nav__link {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .header-links {
        position: relative;
        z-index: 999;
      }

      .header-links .circle {
        background-color: #ffffff26;
      }

      .header-links .circle i {
        color: var(--white);
      }

      .header-links a,
      .header-links i {
        color: var(--white);
      }

      .header-links a {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .header-main__logo-wrapper {
        z-index: 999;
      }

      .header-main .portal-links:hover a > i,
      .header-main .portal-links:hover a > span {
        color: var(--theme-hover);
        cursor: pointer;
      }

      .header-main--shrink .portal-links:hover a > i,
      .header-main--shrink .portal-links:hover a > span {
        color: var(--light-theme-hover);
        cursor: pointer;
      }

      .header-main--dark {
        background-color: #00000047;
      }

      .header-main--shrink {
        background-color: var(--theme);
      }

      /* BODY */
      h1,
      h2,
      h3,
      h4 {
        font-family: var(--title-font);
        font-weight: 500;
      }

      .text-bold {
        font-weight: 700;
      }

      .fs-10 {
        font-size: calc(2.06rem + 6.95vw);
        line-height: 1;
      }

      .button {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .with-overlay-2:after {
        background: rgba(0, 0, 0, 0.1);
      }

      .text-theme {
        color: var(--theme) !important;
      }

      .text-pre-title {
        position: relative;
      }

      .text-pre-title::before,
      .bg-theme .text-pre-title::before,
      .with-overlay-2 .text-pre-title::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/chefs-hat-1769164793123.png")
          no-repeat center center;
        background-size: contain;
        top: -12px;
        left: -4px;
      }

      .text-pre-title::after,
      .bg-theme .text-pre-title::after,
      .with-overlay-2 .text-pre-title::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/bow-red-1769998045412.png")
          no-repeat center center;
        background-size: contain;
        top: 17px;
        left: -1px;
      }

      .bg-theme .text-pre-title::before,
      .with-overlay-2 .text-pre-title::before {
        background: url("https://i0.wp.com/uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/chefs-hat-white-1769355732022.png?ssl=1")
          no-repeat center center;
        background-size: contain;
      }

      .bg-theme .text-pre-title::after,
      .with-overlay-2 .text-pre-title::after {
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/bow-white-1769997393603.png")
          no-repeat center center;
        background-size: contain;
      }

      .bg-white p > a {
        font-weight: bold;
      }

      .bg-theme p > a {
        color: #ffffffc7;
        font-weight: bold;
      }

      .bg-theme p > a:hover {
        color: white;
      }

      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn {
        font-size: 1.4rem;
        text-transform: capitalize;
        border-radius: 0;
      }

      .utd-elements-type-faq
        .faq-container.faq-template-3
        #utd-accordion
        .utd-accordion-item
        .card-header
        h3 {
        font-weight: 400;
      }

      .utd-elements-type-faq .faq-container.faq-template-3 .accordion .card {
        border: 0.5rem;
      }

      .accordion > .card:not(:last-of-type) {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
      }

      .brands--boxed-style .brands__item {
        border-radius: 1rem;
      }

      .isotope__filter-header .filter-button-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
      }

      .isotope__filter-header .filter-button-group .btn-custom,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn {
        padding: 0.5rem 1.5rem !important;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--white);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        line-height: 25px;
        border-radius: 0.3rem;
        background: var(--theme);
        background: linear-gradient(0deg, var(--theme), #ff0a2a) no-repeat;
        transition: background-color var(--fast) ease-in-out;
      }

      .isotope__filter-header .filter-button-group .btn-custom:hover {
        border-radius: 0.3rem;
        background: var(--gray-93);
        color: var(--theme);
      }

      .isotope__filter-header .btn-custom.active,
      .isotope__filter-header .btn-custom.active:hover,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn.active,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn:hover {
        background: var(--gray-93) !important;
        border-color: var(--gray-93) !important;
        color: var(--theme);
      }

      .utd-accordion-filter .btn {
        margin-right: 0.8rem !important;
      }

      /* BLOGPOSTS */
      .post__title {
        font-weight: 400;
      }

      .assortiment .post--outer-style .post__meta {
        border-bottom: 5px solid var(--theme);
        text-align: center;
        background-color: var(--white);
      }

      .assortiment .post__media {
        box-shadow: 0 1rem 4rem var(--blue-shadow);
      }

      .assortiment-categories .post__media {
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        overflow: hidden;
        border: 1px solid var(--gray-93);
        border-bottom: 0;
        background-color: var(--white);
      }

      .assortiment-categories
        .post.post--template.post--basic-style
        .post__img-container {
        padding: 15rem 0;
      }

      .assortiment-categories
        .post.post--template.post--basic-style
        .post__meta {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      .recipes
        .post--3-col.post--outer-style
        .post__meta
        .post__title-container {
        width: 100%;
      }

      .recipes .post--recommendation-style .post__title,
      .recipes .post--3-col.post--outer-style .post__meta .post__title {
        text-align: center;
      }

      .recipes .post--3-col.post--outer-style .post__meta {
        justify-content: center;
      }

      .kijker .post--3-col.post--inner-style .post__title {
        text-align: center;
      }

      .jobs .post--3-col.post--in-out-style .post__meta,
      .blogs .post--3-col.post--outer-style .post__meta {
        text-align: center;
      }

      .jobs .post--in-out-style .post__read-more,
      .blogs .post--outer-style .post__read-more {
        margin-left: auto;
        margin-right: auto;
      }

      .blogs .post__date-container {
        justify-content: center;
      }

      .assortiment-container .post--card-hover-style .post__item {
        min-height: 35rem;
        border: 1px solid var(--gray-97);
      }

      .assortiment-container .post--card-hover-style .post__inner {
        border-radius: 1rem;
        overflow: hidden;
      }

      .assortiment-container
        .post--card-hover-style
        .post__item-link
        div:not(:last-child) {
        margin-bottom: 0;
      }

      .assortiment-container .post--card-hover-style .post__title {
        text-align: center;
      }

      .assortiment-container .post--card-hover-style .post__read-more-btn {
        border-radius: 0;
      }

      .assortiment-container
        .post--card-hover-style
        .post__media
        .post__img-container:before {
        background-image: linear-gradient(
          0deg,
          #1a1a1a33,
          rgb(49 49 49 / 15%),
          transparent,
          transparent
        );
      }

      .assortiment-container .post--card-hover-style .post__read-more-btn {
        font-weight: 700;
        font-size: 1.5rem;
      }

      .assortiment .post__read-more-btn {
        text-shadow: none;
      }

      .right-recipes .post--1-col.post--vertical-list-style .post__inner {
        border: 1px solid var(--gray-93);
        background-color: var(--gray-98);
      }

      .right-recipes .post--1-col.post--vertical-list-style .post__meta {
        background: var(--gray-98);
      }

      .jobs .post__media,
      .jobs .post--3-col.post--in-out-style .post__meta {
        border-radius: 1rem;
        overflow: hidden;
      }

      .persberichten .post--3-col.post--outer-style .post__meta,
      .blogs .post--3-col.post--outer-style .post__meta,
      .recipes .post--3-col.post--outer-style .post__meta {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      .persberichten .post__media,
      .blogs .post__media,
      .recipes .post__media {
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        overflow: hidden;
      }

      /* INNER BLOGPOSTS */
      .uptodate-blogpost .utd-image {
        margin-bottom: 3rem;
        border-radius: 1rem;
        overflow: hidden;
      }

      /* FOOTER */
      .main-footer__details-container a,
      .main-footer__details-container p,
      .footer__copyright,
      a.footer__copyright {
        color: #ffffffc7;
      }

      .main-footer__details-container a:hover,
      a.footer__copyright:hover {
        color: var(--white);
      }

      #contact-bottom {
        z-index: 1;
      }

      .social-footer-item.social-icon {
        font-size: 16px !important;
        width: 32px !important;
        height: 32px !important;
        border-radius: 50% !important;
      }

      .social-footer-item {
        margin: 0 5px 0 0 !important;
        border: 1px solid var(--flat-light-black) !important;
        background-color: var(--flat-light-black) !important;
      }

      .socmed a:hover i {
        background-color: var(--theme) !important;
        border: 1px solid var(--theme) !important;
        cursor: pointer;
      }

      .main-footer__details-container {
        align-items: center;
      }

      .main-footer .border-gray-light {
        border-color: var(--gray-30);
      }

      @media only screen and (min-width: 1200px) {
        :root {
          --post-title: 2rem;
        }

        .circle--5 {
          width: 4rem;
          height: 4rem;
        }

        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .gap-x-10-fluid {
          grid-column-gap: 8rem;
        }

        .header-main__logo-wrapper {
          margin-right: 0;
        }

        .fs-10 {
          font-size: 10rem;
        }

        .assortiment-container .post--card-hover-style .post__title-container {
          padding-top: 25rem;
        }
      }

      @media only screen and (max-width: 1200px) {
        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .header-links span {
          display: none;
        }
      }

      @media only screen and (min-width: 992px) and (min-width: 1200px) {
        .utd-header-nav--line-bottom-edge .utd-header-nav__link,
        .utd-header-nav--line-top-edge .utd-header-nav__link {
          padding: 4rem 2rem;
        }

        .header-main--shrink
          .utd-header-nav--line-bottom-edge
          .utd-header-nav__link {
          padding: calc(1.56rem + 1.2vw) calc(1rem + 0.45vw);
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main__container {
          justify-content: space-between;
        }

        .utd-header-nav {
          margin-left: 0;
        }

        .header-main--shrink:not(.header-main--extended-menu)
          .utd-header-nav__item {
          padding-top: 0;
          padding-bottom: 0;
        }

        .recipes .post--2-col,
        .recipes .post--3-col {
          grid-template-columns: repeat(3, 1fr);
        }

        .is-post.post-page .blog-wrapper-container {
          padding-top: 20rem;
          padding-bottom: 6rem;
        }

        .overlap-box\:expanded-left {
          right: 65%;
          bottom: 0;
        }

        .header-main .utd-header-nav-outside .utd-header-nav__link.active {
          color: var(--theme);
        }

        .header-main--shrink
          .utd-header-nav-outside
          .utd-header-nav__link.active {
          color: var(--light-theme-hover);
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__inner {
          background-color: var(--gray-98);
          grid-template-columns: 0.8fr 1.2fr;
        }

        .right-recipes .post__media {
          width: 120px;
          min-height: 100px;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__meta {
          padding: 2rem 2rem 2rem 1rem;
          justify-content: center;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__title {
          font-size: 1.6rem;
        }

        .box-letter:hover::before {
          opacity: 1;
          transform: scale(1, 1);
        }

        /*.box-letter:hover::after {
      opacity: 1;
      transform: scale(1, 1);
    }

    .box-letter:hover p {
      color: #ffffffc7;
    }

    .box-letter:hover p:first-letter {
      color: var(--white);
    }*/

        .box-letter:hover .box-icon {
          background: var(--theme);
        }

        .assortiment-categories .post--4-col {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      @media only screen and (max-width: 991px) {
        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .recipes .post__item .post__title-container:before,
        .recipes .post__item .post__title-container:after {
          width: 100%;
        }

        .recipes .post__item .post__title-container a:before,
        .recipes .post__item .post__title-container a:after {
          height: 100%;
        }

        .recipes .post--2-col.post--recommendation-style .post__item {
          min-height: 25rem;
        }

        .footer__slab {
          display: none;
        }

        .divider,
        .divider svg {
          height: 80px !important;
        }

        .main-footer__logo-img {
          max-width: 200px !important;
        }

        .overlap-box\:expanded-left {
          top: 0;
          right: 0;
          left: 0;
          bottom: 70%;
        }

        .box-letter .box-icon img {
          width: 45px !important;
        }

        .right-recipes
          .post--1-col.post--vertical-list-style
          .post__meta
          .post__title-container {
          width: 100%;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__title {
          text-align: center;
        }
      }

      @media only screen and (min-width: 768px) {
        .recipes .post--2-col.post--recommendation-style .post__item {
          min-height: 45rem;
        }
      }

      @media only screen and (max-width: 767px) {
        :root {
          --block-padding: 6rem;
        }

        .main-footer__logo-img {
          max-width: 180px !important;
        }

        .hero-content {
          width: 70%;
        }

        .logo-fade-up {
          display: none;
        }
      }

      @media only screen and (min-width: 576px) {
      }

      @media only screen and (max-width: 575px) {
        .box-letter .box-icon img {
          width: 35px !important;
        }
      }

      /* Container styling */
      .translate-box {
        display: inline-block;
      }

      /* Remove Google branding badge (hidden but optional, depends on use case) */
      .goog-logo-link {
        display: none !important;
      }

      .goog-te-gadget {
        font-size: 0 !important;
        height: 32px;
      }

      .goog-te-gadget .goog-te-combo {
        font-size: 13px !important;
        border: none;
        padding: 6px 10px;
        border-radius: 0;
        background-color: #fff;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
        color: #333;
        cursor: pointer;
      }

      /* Optional: Adjust on hover */
      .goog-te-gadget .goog-te-combo:hover {
        background-color: #eee;
      }

      .goog-logo-link,
      .goog-te-gadget span {
        display: none !important;
      }

      .goog-te-gadget {
        color: transparent !important;
        font-size: 0 !important;
      }

      /*Header*/
      .header-main__burger-btn {
        display: flex;
        background-color: #ffffff26;
      }

      /*.header-main__inner {
    padding: 0;
  }*/

      .utd-header-nav-outside .utd-header-nav__list {
        flex-direction: row;
        align-items: center;
      }

      .utd-header-nav-outside .utd-header-nav__link {
        color: var(--white);
      }

      .header-main--shrink .utd-header-nav-outside .utd-header-nav__link:hover {
        color: var(--light-theme-hover);
      }

      .utd-header-nav__link.button {
        background: var(--theme);
        color: #fff;
        border-radius: 100px;
      }

      .utd-header-nav__link.button:hover {
        background: var(--theme-hover);
        color: #fff;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link p {
        white-space: nowrap;
        font-size: 26px;
        color: #fff;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link.button p {
        font-size: 19px;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link.active p,
      .utd-header-nav
        .utd-header-nav__list
        .utd-header-nav__item--with-sub.active
        .utd-header-nav__link
        p {
        font-weight: 800;
      }

      .utd-header-nav__item--with-sub {
        width: unset !important;
      }

      .utd-header-nav .utd-header-nav__link.button,
      .utd-header-nav .utd-header-nav-sub__link.button {
        background: transparent;
        border: 1px solid #fff;
        font-weight: 400;
        font-size: 19px;
      }

      .utd-header-nav .utd-header-nav__link.button:hover,
      .utd-header-nav .utd-header-nav-sub__link.button:hover {
        background: #fff;
        color: var(--theme);
      }

      .utd-header-nav .utd-header-nav__link.button:hover p {
        color: var(--theme) !important;
      }

      .utd-header-nav-outside .utd-header-nav__item {
        margin-bottom: 0 !important;
        margin-right: 0 !important;
      }

      .utd-header-nav-sub__link {
        font-weight: 800;
      }

      .utd-header-nav-outside .utd-header-nav__item {
        font-weight: 600;
      }

      .header-main--shrink
        .utd-header-nav--line-bottom-edge
        .utd-header-nav__link:after {
        background-color: var(--light-theme-hover);
      }

      .header-main--dark .utd-header-nav {
        background-color: var(--theme);
      }

      .header-main__burger-btn1 {
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
      }

      .header-main__burger-btn1 {
        -ms-flex-item-align: center;
        align-self: center;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        height: 2.4rem;
        width: 2.4rem;
        z-index: 100;
        margin-left: auto;
        transition: transform 0.3s ease-in-out;
        justify-content: center;
      }

      .header-main__burger-btn1.active {
        transform: rotate(45deg);
      }

      .header-main__burger-btn1:focus {
        outline: none;
      }

      .header-main__burger-btn1.active .header-main__burger-bar:first-child {
        opacity: 0;
        transform: translateY(0);
      }

      .header-main__burger-btn1.active .header-main__burger-bar:nth-child(2) {
        transform: rotate(90deg);
      }

      .header-main__burger-btn1.active .header-main__burger-bar:nth-child(3) {
        transform: translateY(0);
      }

      @media screen and (max-width: 991px) {
        .header-main__container {
          padding: 0 !important;
          justify-content: space-between;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          padding: 2rem 0;
        }

        .header-links .feat {
          display: none;
        }

        .header-main__burger-btn1 {
          display: flex;
        }

        .utd-header-nav-outside {
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: auto !important;
          width: 100% !important;
          padding: calc(2.06rem + 2.95vw) !important;
          overflow-y: auto !important;
          transform-origin: right;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
          transition:
            transform 0.6s ease-out,
            box-shadow 0.6s ease-out,
            top 0.6s ease-in-out;
          background-color: var(--theme);
          padding-top: 120px !important;
        }

        .utd-header-nav-outside.active {
          overflow-y: auto !important;
          transform: translateX(0);
        }

        .utd-header-nav-outside .utd-header-nav__list {
          flex-direction: column;
        }

        .utd-header-nav-outside .utd-header-nav__item:last-child {
          display: flex !important;
        }

        .header-main--dark .utd-header-nav__link:hover {
          color: var(--light-theme-hover);
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link:after {
          color: var(--light-theme-hover);
        }

        .header-main__burger-btn1 {
          background-color: #ffffff26;
          padding: 2.5rem;
          border-radius: 50%;
        }

        .header-main__burger-bar:first-child {
          transform: translateY(-6px);
        }

        .header-main__burger-bar:last-child {
          transform: translateY(6px);
        }

        .header-main__burger-btn1 .header-main__burger-bar {
          width: 40%;
        }

        .header-main__inner {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main__burger-btn1 {
          display: none;
        }

        .utd-header-nav__item {
          margin-right: 5rem !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .utd-header-nav.active {
          overflow-y: auto !important;
        }

        .utd-header-nav li.utd-header-nav__item {
          flex-direction: row;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub
          .utd-header-nav-sub__list {
          transform: translateX(20rem);
          width: unset !important;
          background: transparent;
          top: 1.5rem;
          border: 0;
          padding: 0;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub:hover
          .utd-header-nav-sub__list {
          opacity: 0;
          visibility: hidden;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub.active
          .utd-header-nav-sub__list {
          transform: translateX(45rem);
          opacity: 1;
          visibility: visible;
        }
      }

      .utd-header-nav {
        position: fixed !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        left: auto !important;
        width: 100% !important;
        padding: calc(2.06rem + 2.95vw) !important;
        overflow-y: auto !important;
        transform-origin: right;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        transition:
          transform 0.6s ease-out,
          box-shadow 0.6s ease-out,
          top 0.6s ease-in-out;
      }

      .utd-header-nav .utd-header-nav-sub__link {
        font-size: 26px;
        color: #fff;
        padding: 1rem;
        text-wrap: nowrap;
      }

      .utd-header-nav {
        z-index: 2;
        background: #e6015a;
        border-top: 0;
        max-width: unset !important;
        padding-top: 120px !important;
      }

      .utd-header-nav.active {
        transform: translateX(0);
      }

      .header-main__burger-btn.active .header-main__burger-bar,
      .header-main__burger-btn1.active .header-main__burger-bar {
        background-color: #fff;
      }

      .utd-header-nav-outside {
        margin-left: 0;
      }

      .utd-header-nav ul.utd-header-nav__list {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 5.2%;
      }

      .utd-header-nav li.utd-header-nav__item {
        padding: 1rem;
      }

      .header-main__burger-btn:hover {
        color: var(--white);
      }

      .header-main--shrink .header-main__burger-btn:hover,
      .header-main__burger-btn.active:hover,
      .header-main--shrink .header-main__burger-btn1:hover,
      .header-main__burger-btn1.active:hover {
        color: var(--white);
      }

      .nav-assortiment .post.post--template.post--basic-style .post__meta {
        justify-content: center;
      }

      .nav-assortiment
        .post.post--template.post--basic-style
        .post__img-container {
        background-color: var(--white);
      }

      .nav-assortiment .post__img {
        object-fit: contain;
      }

      .nav-assortiment .post__title-link:hover,
      .nav-assortiment .post__title-link:hover h3 {
        opacity: 1;
        color: var(--theme-hover);
      }

      .nav-assortiment
        .post.post--template.post--basic-style
        .post__item:hover
        h3 {
        color: var(--theme-hover);
      }

      @media only screen and (min-width: 1200px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }
      }

      @media only screen and (max-width: 1200px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main--dark .utd-header-nav {
          background-color: var(--theme);
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link {
          padding: calc(1.56rem + 1.2vw) calc(1rem + 0.45vw);
        }
      }

      @media only screen and (min-width: 992px) and (max-width: 1200px) {
        .utd-header-nav--line-bottom-edge .utd-header-nav__link span,
        .utd-header-nav__link span,
        .utd-header-nav-outside .utd-header-nav__link {
          font-size: 1.4rem !important;
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link {
          padding: calc(2.5rem + 1.2vw) calc(1rem + 0.45vw);
        }

        .header-main__logo-wrapper {
          margin-right: 2rem;
        }
      }

      @media screen and (min-width: 992px) and (max-width: 1199px) {
        .utd-header-nav
          .utd-header-nav__item--with-sub.active
          .utd-header-nav-sub__list {
          transform: translateX(35rem);
        }
      }

      .utd-header-nav .utd-header-nav-sub__arrow-container {
        color: #fff;
        background: transparent;
      }

      .utd-header-nav .utd-header-nav-sub__arrow-container i {
        font-size: 2rem;
      }

      @media screen and (max-width: 991px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .header-main__inner {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }

      @media screen and (max-width: 767px) {
        .header-main__container.container {
          flex-wrap: wrap;
        }

        .utd-header-nav-outside {
          flex-basis: 100%;
          order: -1;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          margin-right: 0 !important;
        }

        .utd-header-nav-outside .utd-header-nav__list {
          justify-content: space-between;
          gap: 1rem;
        }

        .header-main__inner {
          padding: 1rem 2rem;
        }

        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .header-links .circle {
          background-color: transparent;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          padding: 1rem 0;
        }
      }

      /* DYNAMIC BANNER SLIDER */
      .hero-slider,
      .hero-slider .utd-elements,
      .hero-slider .swiper-slide,
      .hero-slider .swiper-slide .banner-slider-item,
      .hero-slider .swiper-slide .banner-slider-item img {
        height: 95vh !important;
        max-height: 95rem !important;
        min-height: 95rem !important;
      }

      .hero-slider .w-100 {
        height: 95rem !important;
      }

      .hero-slider .swiper-slide .banner-slider-item {
        position: relative;
        z-index: 1;
        color: var(--white);
      }

      .hero-slider .swiper-slide .banner-slider-item:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
      }

      .hero-slider .swiper-slide .banner-slider-item .container,
      .hero-slider .swiper-slide .banner-slider-item .container .flex {
        height: 100%;
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        grid-gap: 5rem;
        max-width: 100%;
        padding-top: 35rem;
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 h2 {
        color: var(--white);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 p {
        color: #ffffffc7;
        font-size: 2rem;
      }

      .hero-slider .swiper-button-prev,
      .hero-slider .swiper-button-next {
        background-image: none;
      }

      .hero-slider .swiper-button-prev i,
      .hero-slider .swiper-button-next i {
        color: var(--white);
      }

      .hero-slider .swiper-container {
        max-height: unset;
      }

      .hero-slider .swiper-slide {
        position: relative;
        z-index: 1;
        color: #fff;
      }

      .hero-slider .swiper-slide:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 0;
      }

      @media only screen and (max-width: 767px) {
        .hero-slider,
        .hero-slider .utd-elements,
        .hero-slider .swiper-slide,
        .hero-slider .swiper-slide .banner-slider-item,
        .hero-slider .swiper-slide .banner-slider-item img {
          height: 80rem !important;
          max-height: 100% !important;
        }

        .hero-slider .swiper-slide .banner-slider-item .max-w-70 {
          grid-gap: 0;
          flex-direction: column;
          padding-top: 20rem;
        }

        .logo-fade-up img {
          max-width: 50%;
        }
      }

      /* GALLERY SLIDER */
      .gallery-slider .slider {
        position: relative;
        width: 100%;
        max-width: 900px;
        max-height: 500px;
        margin: auto;
        overflow: hidden;
        border-radius: 1rem;
        height: 100%;
      }

      .gallery-slider .slides {
        display: flex;
        transition: transform 0.5s ease-in-out;
      }

      .gallery-slider .slide {
        min-width: 100%;
      }

      .gallery-slider .slide img {
        width: 100%;
        display: block;
        object-position: center;
        object-fit: cover;
        height: 100%;
      }

      /* Buttons */
      .gallery-slider .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #ffffff5c;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      .gallery-slider .btn:hover {
        background: #ffffff5c;
      }

      .gallery-slider .btn:focus {
        outline: none;
        box-shadow: none;
      }

      .gallery-slider .prev {
        left: 15px;
      }

      .gallery-slider .prev::before {
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/4-1770015899227.png)
          no-repeat center / contain;
        display: block;
        transform: translateX(-10px);
      }

      .gallery-slider .next {
        right: 15px;
      }

      .gallery-slider .next::before {
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/3-1770015899049.png)
          no-repeat center / contain;
        display: block;
        transform: translateX(-8px);
      }

      /* Dots */
      .gallery-slider .dots {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
      }

      .gallery-slider .dot {
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        cursor: pointer;
      }

      .gallery-slider .dot.active {
        background: white;
      }

      .ingredienten ul,
      .verder ul,
      .bereiding ul {
        list-style: none;
        padding-left: 0;
      }

      .ingredienten ul li,
      .verder ul li,
      .bereiding ul li {
        position: relative;
        padding-left: 32px;
      }

      .ingredienten ul li::before,
      .verder ul li::before,
      .bereiding ul li::before {
        content: "✔";
        font-size: 1.2rem;
        position: absolute;
        left: 0;
        top: 3px;
        color: var(--theme);
        height: 24px;
        width: 24px;
        background-color: var(--light-theme);
        border-radius: 50%;
        text-align: center;
      }
    </style>

    <!-- Global Header Code -->
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

      :root {
        --body-font: "Raleway", sans-serif;
        --title-font: "Ubuntu", sans-serif;
        --flat-light-black: #393939;
        --post-image-padding: 7rem 0;
        --post-title-sm: 2rem;
        --light-theme-hover: #f3a4ae;
        --post-image-padding-xl: 15rem 0;
        --gray-subtle-300: var(--gray-30);
        --light-theme: #ffeff1;
      }

      body {
        color: var(--body-font-color);
        font-family: var(--body-font);
      }

      #preloader[data-gjs-type="default"] {
        display: none !important;
      }

      #main-content .hero .container {
        padding-top: 15rem;
      }

      /* CLASSES */
      .bg-flat-black {
        background-color: var(--gray-20);
      }

      .bg-flat-light-black {
        background-color: var(--flat-light-black);
        border-radius: 0.5rem;
      }

      .bg-light-theme {
        background-color: var(--light-theme);
      }

      .border-light-theme {
        border-color: var(--light-theme);
      }

      .border-gray-light {
        border-color: var(--gray-93);
      }

      .author {
        padding: 0.3rem 0.8rem;
        border-radius: 2px;
        border: 1px solid var(--gray-93);
        grid-gap: 0.5rem !important;
      }

      .author p,
      .author i,
      .author span {
        font-size: 1.2rem;
        color: var(--body-font-color);
      }

      .text-bold {
        font-weight: 700;
      }

      .circle-check {
        height: 25px !important;
        width: 25px !important;
      }

      .circle-check i {
        font-size: 1.2rem;
      }

      .text-nowrap {
        white-space: nowrap;
      }

      .footer-subtitle {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 20px;
      }

      .form-check {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        grid-gap: 1rem;
      }

      .form-check p {
        margin-left: 1rem;
        font-size: 1.2rem;
      }

      .form-check-input {
        margin-top: 0.8rem;
        width: 20px;
      }

      .form-group .btn {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.6rem;
        letter-spacing: 1.5px;
        border-radius: 0;
      }

      .form-group input {
        height: 45px;
        font-size: 1.4rem;
      }

      .logo-fade-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
        animation-delay: 2s;
      }

      .fade-up span {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
      }

      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-content {
        width: 80%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .post--in-out-style .post__read-more a,
      .post--outer-style .post__read-more a {
        border-radius: 0;
      }

      /*.button-blue,
  .bg-white .button-blue,
  .post--in-out-style .post__read-more a,
  .form-group .btn,
  .bg-theme .button-white,
  .post--outer-style .post__read-more a {
  	position: relative;
  	font-size: 1.5rem;
  }
  
  .button-blue:before,
  .bg-white .button-blue:before,
  .post--in-out-style .post__read-more a:before,
  .form-group .btn:before,
  .bg-theme .button-white:before,
  .post--outer-style .post__read-more a:before {
  	content: '';
    height: 7px;
    width: calc(100% - 36px);
    position: absolute;
    bottom: -7px;
    border-radius: 0;
    background-color: var(--white);
    opacity: .5;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    left: 18px;
  }
  
  .bg-white .button-blue:before,
  .post--in-out-style .post__read-more a:before,
  .form-group .btn:before,
  .post--outer-style .post__read-more a:before {
  	width: calc(100% - 25px);
  	background-color: var(--light-theme-hover);
  	left: 13px;
  }
  
  .button-blue:hover:before,
  .bg-white .button-blue:hover:before,
  .post--in-out-style .post__read-more a:hover:before,
  .form-group .btn:hover:before,
  .bg-theme .button-white:hover:before,
  .post--outer-style .post__read-more a:hover:before {
  	bottom: -6px;
    -webkit-transform: scale(.95);
    transform: scale(.95);
  }
  */

      .bg-white .button-blue,
      .bg-theme .button-blue,
      .form-group .btn,
      .bg-flat-black .button-blue,
      .hero-content .button-blue,
      .bg-theme .button-white,
      .jobs .post--in-out-style .post__read-more a {
        background-color: var(--theme);
        border: 1px solid var(--theme);
        color: var(--white);
        padding: 1.2rem 2.4rem;
        border-radius: 0.25rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .bg-theme .button-blue,
      .bg-flat-black .button-blue:hover,
      .hero-content .button-blue:hover,
      .bg-theme .button-white {
        background-color: var(--white) !important;
        border: 1px solid var(--white) !important;
        color: var(--theme);
      }

      .bg-white .button-blue:hover,
      .form-group .btn:hover,
      .jobs .post--in-out-style .post__read-more a:hover {
        background-color: var(--gray-93) !important;
        border: 1px solid var(--gray-93) !important;
        color: var(--theme);
      }

      .bg-theme .button-blue:hover,
      .bg-theme .button-white:hover {
        background-color: var(--theme-hover) !important;
        border: 1px solid var(--theme-hover) !important;
        color: var(--white);
      }

      .newsletter-section,
      .newsletter-section-box {
        position: relative;
      }

      .newsletter-section:before,
      .newsletter-section-box:before,
      .bg-white .newsletter-section:before {
        content: "";
        height: 10px;
        width: calc(100% - 36px);
        position: absolute;
        bottom: -10px;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        background-color: var(--white);
        opacity: 1;
        left: 18px;
      }

      .newsletter-section-box:before,
      .bg-white .newsletter-section:before {
        background-color: var(--light-theme-hover);
      }

      .text-font {
        font-family: var(--title-font);
      }

      .sliding-text p {
        white-space: nowrap;
      }

      .sliding-text {
        animation: sliding-text-animate 30s linear infinite;
        grid-gap: 5rem;
      }

      @keyframes sliding-text-animate {
        0% {
          transform: translateX(0) translateZ(0);
        }

        100% {
          transform: translateX(-100%) translateZ(0);
        }
      }

      .circle-badge {
        width: auto;
        height: auto;
      }

      .circle-text {
        font-size: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        fill: #fff;
        animation: spin 12s linear infinite;
        transform-origin: 50% 50%;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* PULSE BUTTON */
      .cta-video a {
        width: 70px;
        height: 70px;
        background-color: var(--theme);
        padding: 0;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        box-sizing: content-box;
        border-radius: 50%;
        line-height: 80px;
        margin: 0 auto;
        left: 50%;
        top: 50%;
        z-index: 9;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cta-video a:before {
        background: var(--theme);
        content: "";
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        -webkit-animation: pulse-border 1500ms ease-out infinite;
        animation: pulse-border 1500ms ease-out infinite;
      }

      .cta-video a:after {
        content: "";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transition: all 200ms;
      }

      .cta-video a > i {
        position: relative;
        overflow: hidden;
      }

      .cta-video a:hover {
        background-color: var(--white);
      }

      .cta-video a:hover i {
        color: var(--theme) !important;
      }

      .cta-video a:hover:before {
        background-color: var(--white);
      }

      @keyframes pulse-border {
        0% {
          transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
          opacity: 1;
        }

        100% {
          transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
          opacity: 0;
        }
      }

      .contact-icon {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        display: inline-block;
        background-color: var(--theme);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
      }

      .contact-icon:after {
        position: absolute;
        content: "";
        left: -5px;
        bottom: -5px;
        width: 30px;
        height: 30px;
        z-index: -1;
        background-image: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/1-1766475122822.png");
      }

      .contact-icon i {
        font-size: 1.2rem !important;
      }

      /* WAVES */
      .waves {
        position: relative;
        width: 100%;
        height: 20vh;
        margin-bottom: -7px; /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
      }

      .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }

      .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }

      .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }

      .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }

      .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }

      @keyframes move-forever {
        0% {
          transform: translate3d(-90px, 0, 0);
        }
        100% {
          transform: translate3d(85px, 0, 0);
        }
      }

      /*Shrinking for mobile*/
      @media (max-width: 768px) {
        .waves {
          height: 40px;
          min-height: 40px;
        }
      }

      .box-letter {
        background-color: var(--gray-subtle-100);
      }

      .box-letter:before {
        position: absolute;
        content: "";
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        opacity: 0;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
        transform: scale(1, 0.2);
        background: var(--light-theme);
        border-radius: 1rem;
      }

      .box-letter:after {
        position: absolute;
        content: "";
        left: 0px;
        right: 0px;
        bottom: -10px;
        height: 40px;
        z-index: -1;
        opacity: 0;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
        transform: scale(0.1, 1);
        background-color: var(--theme-hover);
        border-radius: 1.5rem;
      }

      .box-letter p,
      .box-letter .box-icon,
      .box-letter .box-icon img {
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
      }

      .box-letter .box-icon {
        background: var(--theme);
      }

      /* HEADER */
      .header-main--dark {
        background-color: transparent;
      }

      .header-main--shrink {
        background-color: var(--theme);
      }

      /*.post-template-default .is-post .header-main .header-main__inner:before {
  	background: linear-gradient(to bottom, #272727a3, #4b4b4b61, transparent);
    height: 120px;
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
  }
  
  .post-template-default .is-post .header-main--shrink .header-main__inner:before {
  	height: 0;
  }*/

      .header-main__inner {
        border-bottom: 1px solid #ffffff1f;
      }

      .header-main__logo {
        max-height: 8rem;
      }

      .header-main--shrink .header-main__logo {
        max-height: 6.5rem;
        transition: all 0.2s ease-in-out;
      }

      .utd-header-nav__link {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .header-links {
        position: relative;
        z-index: 999;
      }

      .header-links .circle {
        background-color: #ffffff26;
      }

      .header-links .circle i {
        color: var(--white);
      }

      .header-links a,
      .header-links i {
        color: var(--white);
      }

      .header-links a {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .header-main__logo-wrapper {
        z-index: 999;
      }

      .header-main .portal-links:hover a > i,
      .header-main .portal-links:hover a > span {
        color: var(--theme-hover);
        cursor: pointer;
      }

      .header-main--shrink .portal-links:hover a > i,
      .header-main--shrink .portal-links:hover a > span {
        color: var(--light-theme-hover);
        cursor: pointer;
      }

      .header-main--dark {
        background-color: #00000047;
      }

      .header-main--shrink {
        background-color: var(--theme);
      }

      /* BODY */
      h1,
      h2,
      h3,
      h4 {
        font-family: var(--title-font);
        font-weight: 500;
      }

      .text-bold {
        font-weight: 700;
      }

      .fs-10 {
        font-size: calc(2.06rem + 6.95vw);
        line-height: 1;
      }

      .button {
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      .with-overlay-2:after {
        background: rgba(0, 0, 0, 0.1);
      }

      .text-theme {
        color: var(--theme) !important;
      }

      .text-pre-title {
        position: relative;
      }

      .text-pre-title::before,
      .bg-theme .text-pre-title::before,
      .with-overlay-2 .text-pre-title::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/chefs-hat-1769164793123.png")
          no-repeat center center;
        background-size: contain;
        top: -12px;
        left: -4px;
      }

      .text-pre-title::after,
      .bg-theme .text-pre-title::after,
      .with-overlay-2 .text-pre-title::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/bow-red-1769998045412.png")
          no-repeat center center;
        background-size: contain;
        top: 17px;
        left: -1px;
      }

      .bg-theme .text-pre-title::before,
      .with-overlay-2 .text-pre-title::before {
        background: url("https://i0.wp.com/uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/chefs-hat-white-1769355732022.png?ssl=1")
          no-repeat center center;
        background-size: contain;
      }

      .bg-theme .text-pre-title::after,
      .with-overlay-2 .text-pre-title::after {
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/bow-white-1769997393603.png")
          no-repeat center center;
        background-size: contain;
      }

      .bg-white p > a {
        font-weight: bold;
      }

      .bg-theme p > a {
        color: #ffffffc7;
        font-weight: bold;
      }

      .bg-theme p > a:hover {
        color: white;
      }

      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn {
        font-size: 1.4rem;
        text-transform: capitalize;
        border-radius: 0;
      }

      .utd-elements-type-faq
        .faq-container.faq-template-3
        #utd-accordion
        .utd-accordion-item
        .card-header
        h3 {
        font-weight: 400;
      }

      .utd-elements-type-faq .faq-container.faq-template-3 .accordion .card {
        border: 0.5rem;
      }

      .accordion > .card:not(:last-of-type) {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
      }

      .brands--boxed-style .brands__item {
        border-radius: 1rem;
      }

      .isotope__filter-header .filter-button-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
      }

      .isotope__filter-header .filter-button-group .btn-custom,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn {
        padding: 0.5rem 1.5rem !important;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--white);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        line-height: 25px;
        border-radius: 0.3rem;
        background: var(--theme);
        background: linear-gradient(0deg, var(--theme), #ff0a2a) no-repeat;
        transition: background-color var(--fast) ease-in-out;
      }

      .isotope__filter-header .filter-button-group .btn-custom:hover {
        border-radius: 0.3rem;
        background: var(--gray-93);
        color: var(--theme);
      }

      .isotope__filter-header .btn-custom.active,
      .isotope__filter-header .btn-custom.active:hover,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn.active,
      .utd-elements-type-faq .faq-container .utd-accordion-filter-btn:hover {
        background: var(--gray-93) !important;
        border-color: var(--gray-93) !important;
        color: var(--theme);
      }

      .utd-accordion-filter .btn {
        margin-right: 0.8rem !important;
      }

      /* BLOGPOSTS */
      .post__title {
        font-weight: 400;
      }

      .assortiment .post--outer-style .post__meta {
        border-bottom: 5px solid var(--theme);
        text-align: center;
        background-color: var(--white);
      }

      .assortiment .post__media {
        box-shadow: 0 1rem 4rem var(--blue-shadow);
      }

      .assortiment-container .post--card-hover-style .post__read-more-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
      }

      .assortiment-container
        .post--card-hover-style
        .post__read-more-btn::after {
        content: "";
        width: 8px;
        height: 8px;
        background: url("https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/arrow-1771295638873.png")
          no-repeat center;
        background-size: contain;
        transition: transform 0.3s ease;
      }

      .recipes
        .post--3-col.post--outer-style
        .post__meta
        .post__title-container {
        width: 100%;
      }

      .recipes .post--recommendation-style .post__title,
      .recipes .post--3-col.post--outer-style .post__meta .post__title {
        text-align: center;
      }

      .recipes .post--3-col.post--outer-style .post__meta {
        justify-content: center;
      }

      .kijker .post--3-col.post--inner-style .post__title {
        text-align: center;
      }

      .jobs .post--3-col.post--in-out-style .post__meta,
      .blogs .post--3-col.post--outer-style .post__meta {
        text-align: center;
      }

      .jobs .post--in-out-style .post__read-more,
      .blogs .post--outer-style .post__read-more {
        margin-left: auto;
        margin-right: auto;
      }

      .blogs .post__date-container {
        justify-content: center;
      }

      .assortiment-container .post--card-hover-style .post__item {
        min-height: 35rem;
        border: 1px solid var(--gray-97);
      }

      .assortiment-container .post--card-hover-style .post__inner {
        border-radius: 1rem;
        overflow: hidden;
      }

      .assortiment-container
        .post--card-hover-style
        .post__item-link
        div:not(:last-child) {
        margin-bottom: 0;
      }

      .assortiment-container .post--card-hover-style .post__title {
        text-align: center;
      }

      .assortiment-container .post--card-hover-style .post__read-more-btn {
        border-radius: 0;
      }

      .assortiment-container
        .post--card-hover-style
        .post__media
        .post__img-container:before {
        background-image: linear-gradient(
          0deg,
          #1a1a1a33,
          rgb(49 49 49 / 15%),
          transparent,
          transparent
        );
      }

      .assortiment-container .post--card-hover-style .post__read-more-btn {
        font-weight: 700;
        font-size: 1.5rem;
      }

      .assortiment .post__read-more-btn {
        text-shadow: none;
      }

      .right-recipes .post--1-col.post--vertical-list-style .post__inner {
        border: 1px solid var(--gray-93);
        background-color: var(--gray-98);
      }

      .right-recipes .post--1-col.post--vertical-list-style .post__meta {
        background: var(--gray-98);
      }

      .jobs .post__media,
      .jobs .post--3-col.post--in-out-style .post__meta {
        border-radius: 1rem;
        overflow: hidden;
      }

      .persberichten .post--3-col.post--outer-style .post__meta,
      .blogs .post--3-col.post--outer-style .post__meta,
      .recipes .post--3-col.post--outer-style .post__meta {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      .persberichten .post__media,
      .blogs .post__media,
      .recipes .post__media {
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        overflow: hidden;
      }

      /* INNER BLOGPOSTS */
      .uptodate-blogpost .utd-image {
        margin-bottom: 3rem;
        border-radius: 1rem;
        overflow: hidden;
      }

      /* FOOTER */
      .main-footer__details-container a,
      .main-footer__details-container p,
      .footer__copyright,
      a.footer__copyright {
        color: #ffffffc7;
      }

      .main-footer__details-container a:hover,
      a.footer__copyright:hover {
        color: var(--white);
      }

      #contact-bottom {
        z-index: 1;
      }

      .social-footer-item.social-icon {
        font-size: 16px !important;
        width: 32px !important;
        height: 32px !important;
        border-radius: 50% !important;
      }

      .social-footer-item {
        margin: 0 5px 0 0 !important;
        border: 1px solid var(--flat-light-black) !important;
        background-color: var(--flat-light-black) !important;
      }

      .socmed a:hover i {
        background-color: var(--theme) !important;
        border: 1px solid var(--theme) !important;
        cursor: pointer;
      }

      .main-footer__details-container {
        align-items: center;
      }

      .main-footer .border-gray-light {
        border-color: var(--gray-30);
      }

      @media only screen and (min-width: 1200px) {
        :root {
          --post-title: 2rem;
        }

        .circle--5 {
          width: 4rem;
          height: 4rem;
        }

        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .gap-x-10-fluid {
          grid-column-gap: 8rem;
        }

        .header-main__logo-wrapper {
          margin-right: 0;
        }

        .fs-10 {
          font-size: 10rem;
        }

        .assortiment-container .post--card-hover-style .post__title-container {
          padding-top: 25rem;
        }
      }

      @media only screen and (max-width: 1200px) {
        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .header-links span {
          display: none;
        }
      }

      @media only screen and (min-width: 992px) and (min-width: 1200px) {
        .utd-header-nav--line-bottom-edge .utd-header-nav__link,
        .utd-header-nav--line-top-edge .utd-header-nav__link {
          padding: 4rem 2rem;
        }

        .header-main--shrink
          .utd-header-nav--line-bottom-edge
          .utd-header-nav__link {
          padding: calc(1.56rem + 1.2vw) calc(1rem + 0.45vw);
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main__container {
          justify-content: space-between;
        }

        .utd-header-nav {
          margin-left: 0;
        }

        .header-main--shrink:not(.header-main--extended-menu)
          .utd-header-nav__item {
          padding-top: 0;
          padding-bottom: 0;
        }

        .recipes .post--2-col,
        .recipes .post--3-col {
          grid-template-columns: repeat(3, 1fr);
        }

        .is-post.post-page .blog-wrapper-container {
          padding-top: 20rem;
          padding-bottom: 6rem;
        }

        .overlap-box\:expanded-left {
          right: 65%;
          bottom: 0;
        }

        .header-main .utd-header-nav-outside .utd-header-nav__link.active {
          color: var(--theme);
        }

        .header-main--shrink
          .utd-header-nav-outside
          .utd-header-nav__link.active {
          color: var(--light-theme-hover);
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__inner {
          background-color: var(--gray-98);
          grid-template-columns: 0.8fr 1.2fr;
        }

        .right-recipes .post__media {
          width: 120px;
          min-height: 100px;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__meta {
          padding: 2rem 2rem 2rem 1rem;
          justify-content: center;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__title {
          font-size: 1.6rem;
        }

        .box-letter:hover::before {
          opacity: 1;
          transform: scale(1, 1);
        }

        /*.box-letter:hover::after {
      opacity: 1;
      transform: scale(1, 1);
    }

    .box-letter:hover p {
      color: #ffffffc7;
    }

    .box-letter:hover p:first-letter {
      color: var(--white);
    }*/

        .box-letter:hover .box-icon {
          background: var(--theme);
        }
      }

      @media only screen and (max-width: 991px) {
        .recipes .post.post--template.post--recommendation-style .post__meta {
          height: 100%;
        }

        .recipes .post__item .post__title-container:before,
        .recipes .post__item .post__title-container:after {
          width: 100%;
        }

        .recipes .post__item .post__title-container a:before,
        .recipes .post__item .post__title-container a:after {
          height: 100%;
        }

        .recipes .post--2-col.post--recommendation-style .post__item {
          min-height: 25rem;
        }

        .footer__slab {
          display: none;
        }

        .divider,
        .divider svg {
          height: 80px !important;
        }

        .main-footer__logo-img {
          max-width: 200px !important;
        }

        .overlap-box\:expanded-left {
          top: 0;
          right: 0;
          left: 0;
          bottom: 70%;
        }

        .box-letter .box-icon img {
          width: 45px !important;
        }

        .right-recipes
          .post--1-col.post--vertical-list-style
          .post__meta
          .post__title-container {
          width: 100%;
        }

        .right-recipes .post--1-col.post--vertical-list-style .post__title {
          text-align: center;
        }
      }

      @media only screen and (min-width: 768px) {
        .recipes .post--2-col.post--recommendation-style .post__item {
          min-height: 45rem;
        }
      }

      @media only screen and (max-width: 767px) {
        :root {
          --block-padding: 6rem;
        }

        .main-footer__logo-img {
          max-width: 180px !important;
        }

        .hero-content {
          width: 70%;
        }

        .logo-fade-up {
          display: none;
        }
      }

      @media only screen and (min-width: 576px) {
      }

      @media only screen and (max-width: 575px) {
        .box-letter .box-icon img {
          width: 35px !important;
        }
      }

      /* Container styling */
      .translate-box {
        display: inline-block;
      }

      /* Remove Google branding badge (hidden but optional, depends on use case) */
      .goog-logo-link {
        display: none !important;
      }

      .goog-te-gadget {
        font-size: 0 !important;
        height: 32px;
      }

      .goog-te-gadget .goog-te-combo {
        font-size: 13px !important;
        border: none;
        padding: 6px 10px;
        border-radius: 0;
        background-color: #fff;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
        color: #333;
        cursor: pointer;
      }

      /* Optional: Adjust on hover */
      .goog-te-gadget .goog-te-combo:hover {
        background-color: #eee;
      }

      .goog-logo-link,
      .goog-te-gadget span {
        display: none !important;
      }

      .goog-te-gadget {
        color: transparent !important;
        font-size: 0 !important;
      }

      /*Header*/
      .header-main__burger-btn {
        display: flex;
        background-color: #ffffff26;
      }

      /*.header-main__inner {
    padding: 0;
  }*/

      .utd-header-nav-outside .utd-header-nav__list {
        flex-direction: row;
        align-items: center;
      }

      .utd-header-nav-outside .utd-header-nav__link {
        color: var(--white);
      }

      .header-main--shrink .utd-header-nav-outside .utd-header-nav__link:hover {
        color: var(--light-theme-hover);
      }

      .utd-header-nav__link.button {
        background: var(--theme);
        color: #fff;
        border-radius: 100px;
      }

      .utd-header-nav__link.button:hover {
        background: var(--theme-hover);
        color: #fff;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link p {
        white-space: nowrap;
        font-size: 26px;
        color: #fff;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link.button p {
        font-size: 19px;
      }

      .utd-header-nav .utd-header-nav__list .utd-header-nav__link.active p,
      .utd-header-nav
        .utd-header-nav__list
        .utd-header-nav__item--with-sub.active
        .utd-header-nav__link
        p {
        font-weight: 800;
      }

      .utd-header-nav__item--with-sub {
        width: unset !important;
      }

      .utd-header-nav .utd-header-nav__link.button,
      .utd-header-nav .utd-header-nav-sub__link.button {
        background: transparent;
        border: 1px solid #fff;
        font-weight: 400;
        font-size: 19px;
      }

      .utd-header-nav .utd-header-nav__link.button:hover,
      .utd-header-nav .utd-header-nav-sub__link.button:hover {
        background: #fff;
        color: var(--theme);
      }

      .utd-header-nav .utd-header-nav__link.button:hover p {
        color: var(--theme) !important;
      }

      .utd-header-nav-outside .utd-header-nav__item {
        margin-bottom: 0 !important;
        margin-right: 0 !important;
      }

      .utd-header-nav-sub__link {
        font-weight: 800;
      }

      .utd-header-nav-outside .utd-header-nav__item {
        font-weight: 600;
      }

      .header-main--shrink
        .utd-header-nav--line-bottom-edge
        .utd-header-nav__link:after {
        background-color: var(--light-theme-hover);
      }

      .header-main--dark .utd-header-nav {
        background-color: var(--theme);
      }

      .header-main__burger-btn1 {
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
      }

      .header-main__burger-btn1 {
        -ms-flex-item-align: center;
        align-self: center;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        height: 2.4rem;
        width: 2.4rem;
        z-index: 100;
        margin-left: auto;
        transition: transform 0.3s ease-in-out;
        justify-content: center;
      }

      .header-main__burger-btn1.active {
        transform: rotate(45deg);
      }

      .header-main__burger-btn1:focus {
        outline: none;
      }

      .header-main__burger-btn1.active .header-main__burger-bar:first-child {
        opacity: 0;
        transform: translateY(0);
      }

      .header-main__burger-btn1.active .header-main__burger-bar:nth-child(2) {
        transform: rotate(90deg);
      }

      .header-main__burger-btn1.active .header-main__burger-bar:nth-child(3) {
        transform: translateY(0);
      }

      @media screen and (max-width: 991px) {
        .header-main__container {
          padding: 0 !important;
          justify-content: space-between;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          padding: 2rem 0;
        }

        .header-links .feat {
          display: none;
        }

        .header-main__burger-btn1 {
          display: flex;
        }

        .utd-header-nav-outside {
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: auto !important;
          width: 100% !important;
          padding: calc(2.06rem + 2.95vw) !important;
          overflow-y: auto !important;
          transform-origin: right;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
          transition:
            transform 0.6s ease-out,
            box-shadow 0.6s ease-out,
            top 0.6s ease-in-out;
          background-color: var(--theme);
          padding-top: 120px !important;
        }

        .utd-header-nav-outside.active {
          overflow-y: auto !important;
          transform: translateX(0);
        }

        .utd-header-nav-outside .utd-header-nav__list {
          flex-direction: column;
        }

        .utd-header-nav-outside .utd-header-nav__item:last-child {
          display: flex !important;
        }

        .header-main--dark .utd-header-nav__link:hover {
          color: var(--light-theme-hover);
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link:after {
          color: var(--light-theme-hover);
        }

        .header-main__burger-btn1 {
          background-color: #ffffff26;
          padding: 2.5rem;
          border-radius: 50%;
        }

        .header-main__burger-bar:first-child {
          transform: translateY(-6px);
        }

        .header-main__burger-bar:last-child {
          transform: translateY(6px);
        }

        .header-main__burger-btn1 .header-main__burger-bar {
          width: 40%;
        }

        .header-main__inner {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main__burger-btn1 {
          display: none;
        }

        .utd-header-nav__item {
          margin-right: 5rem !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .utd-header-nav.active {
          overflow-y: auto !important;
        }

        .utd-header-nav li.utd-header-nav__item {
          flex-direction: row;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub
          .utd-header-nav-sub__list {
          transform: translateX(20rem);
          width: unset !important;
          background: transparent;
          top: 1.5rem;
          border: 0;
          padding: 0;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub:hover
          .utd-header-nav-sub__list {
          opacity: 0;
          visibility: hidden;
        }

        .utd-header-nav
          .utd-header-nav__item--with-sub.active
          .utd-header-nav-sub__list {
          transform: translateX(45rem);
          opacity: 1;
          visibility: visible;
        }
      }

      .utd-header-nav {
        position: fixed !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        left: auto !important;
        width: 100% !important;
        padding: calc(2.06rem + 2.95vw) !important;
        overflow-y: auto !important;
        transform-origin: right;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        transition:
          transform 0.6s ease-out,
          box-shadow 0.6s ease-out,
          top 0.6s ease-in-out;
      }

      .utd-header-nav .utd-header-nav-sub__link {
        font-size: 26px;
        color: #fff;
        padding: 1rem;
        text-wrap: nowrap;
      }

      .utd-header-nav {
        z-index: 2;
        background: #e6015a;
        border-top: 0;
        max-width: unset !important;
        padding-top: 120px !important;
      }

      .utd-header-nav.active {
        transform: translateX(0);
      }

      .header-main__burger-btn.active .header-main__burger-bar,
      .header-main__burger-btn1.active .header-main__burger-bar {
        background-color: #fff;
      }

      .utd-header-nav-outside {
        margin-left: 0;
      }

      .utd-header-nav ul.utd-header-nav__list {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 5.2%;
      }

      .utd-header-nav li.utd-header-nav__item {
        padding: 1rem;
      }

      .header-main__burger-btn:hover {
        color: var(--white);
      }

      .header-main--shrink .header-main__burger-btn:hover,
      .header-main__burger-btn.active:hover,
      .header-main--shrink .header-main__burger-btn1:hover,
      .header-main__burger-btn1.active:hover {
        color: var(--white);
      }

      .nav-assortiment .post.post--template.post--basic-style .post__meta {
        justify-content: center;
      }

      .nav-assortiment
        .post.post--template.post--basic-style
        .post__img-container {
        background-color: var(--white);
      }

      .nav-assortiment .post__img {
        object-fit: contain;
      }

      .nav-assortiment .post__title-link:hover,
      .nav-assortiment .post__title-link:hover h3 {
        opacity: 1;
        color: var(--theme-hover);
      }

      .nav-assortiment
        .post.post--template.post--basic-style
        .post__item:hover
        h3 {
        color: var(--theme-hover);
      }

      @media only screen and (min-width: 1200px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }
      }

      @media only screen and (max-width: 1200px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }

      @media only screen and (min-width: 992px) {
        .header-main--dark .utd-header-nav {
          background-color: var(--theme);
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link {
          padding: calc(1.56rem + 1.2vw) calc(1rem + 0.45vw);
        }
      }

      @media only screen and (min-width: 992px) and (max-width: 1200px) {
        .utd-header-nav--line-bottom-edge .utd-header-nav__link span,
        .utd-header-nav__link span,
        .utd-header-nav-outside .utd-header-nav__link {
          font-size: 1.4rem !important;
        }

        .utd-header-nav--line-bottom-edge .utd-header-nav__link {
          padding: calc(2.5rem + 1.2vw) calc(1rem + 0.45vw);
        }

        .header-main__logo-wrapper {
          margin-right: 2rem;
        }
      }

      @media screen and (min-width: 992px) and (max-width: 1199px) {
        .utd-header-nav
          .utd-header-nav__item--with-sub.active
          .utd-header-nav-sub__list {
          transform: translateX(35rem);
        }
      }

      .utd-header-nav .utd-header-nav-sub__arrow-container {
        color: #fff;
        background: transparent;
      }

      .utd-header-nav .utd-header-nav-sub__arrow-container i {
        font-size: 2rem;
      }

      @media screen and (max-width: 991px) {
        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .header-main__inner {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }

      @media screen and (max-width: 767px) {
        .header-main__container.container {
          flex-wrap: wrap;
        }

        .utd-header-nav-outside {
          flex-basis: 100%;
          order: -1;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          margin-right: 0 !important;
        }

        .utd-header-nav-outside .utd-header-nav__list {
          justify-content: space-between;
          gap: 1rem;
        }

        .header-main__inner {
          padding: 1rem 2rem;
        }

        .nav-assortiment .post--4-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .header-links .circle {
          background-color: transparent;
        }

        .utd-header-nav-outside .utd-header-nav__item {
          padding: 1rem 0;
        }
      }

      /* DYNAMIC BANNER SLIDER */
      .hero-slider,
      .hero-slider .utd-elements,
      .hero-slider .swiper-slide,
      .hero-slider .swiper-slide .banner-slider-item,
      .hero-slider .swiper-slide .banner-slider-item img {
        height: 95vh !important;
        max-height: 95rem !important;
        min-height: 95rem !important;
      }

      .hero-slider .w-100 {
        height: 95rem !important;
      }

      .hero-slider .swiper-slide .banner-slider-item {
        position: relative;
        z-index: 1;
        color: var(--white);
      }

      .hero-slider .swiper-slide .banner-slider-item:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
      }

      .hero-slider .swiper-slide .banner-slider-item .container,
      .hero-slider .swiper-slide .banner-slider-item .container .flex {
        height: 100%;
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        grid-gap: 5rem;
        max-width: 100%;
        padding-top: 35rem;
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 h2 {
        color: var(--white);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      .hero-slider .swiper-slide .banner-slider-item .max-w-70 p {
        color: #ffffffc7;
        font-size: 2rem;
      }

      .hero-slider .swiper-button-prev,
      .hero-slider .swiper-button-next {
        background-image: none;
      }

      .hero-slider .swiper-button-prev i,
      .hero-slider .swiper-button-next i {
        color: var(--white);
      }

      .hero-slider .swiper-container {
        max-height: unset;
      }

      .hero-slider .swiper-slide {
        position: relative;
        z-index: 1;
        color: #fff;
      }

      .hero-slider .swiper-slide:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 0;
      }

      @media only screen and (max-width: 767px) {
        .hero-slider,
        .hero-slider .utd-elements,
        .hero-slider .swiper-slide,
        .hero-slider .swiper-slide .banner-slider-item,
        .hero-slider .swiper-slide .banner-slider-item img {
          height: 80rem !important;
          max-height: 100% !important;
        }

        .hero-slider .swiper-slide .banner-slider-item .max-w-70 {
          grid-gap: 0;
          flex-direction: column;
          padding-top: 20rem;
        }

        .logo-fade-up img {
          max-width: 50%;
        }
      }

      /* GALLERY SLIDER */
      .gallery-slider .slider {
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: auto;
        overflow: hidden;
        border-radius: 1rem;
        height: 100%;
      }

      .gallery-slider .slides {
        display: flex;
        transition: transform 0.5s ease-in-out;
      }

      .gallery-slider .slide {
        min-width: 100%;
      }

      .gallery-slider .slide img {
        width: 100%;
        display: block;
        object-position: center;
        object-fit: cover;
        height: 100%;
      }

      /* Buttons */
      .gallery-slider .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #ffffff5c;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      .gallery-slider .btn:hover {
        background: #ffffff5c;
      }

      .gallery-slider .btn:focus {
        outline: none;
        box-shadow: none;
      }

      .gallery-slider .prev {
        left: 15px;
      }

      .gallery-slider .prev::before {
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/4-1770015899227.png)
          no-repeat center / contain;
        display: block;
        transform: translateX(-10px);
      }

      .gallery-slider .next {
        right: 15px;
      }

      .gallery-slider .next::before {
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/3-1770015899049.png)
          no-repeat center / contain;
        display: block;
        transform: translateX(-8px);
      }

      /* Dots */
      .gallery-slider .dots {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
      }

      .gallery-slider .dot {
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        cursor: pointer;
      }

      .gallery-slider .dot.active {
        background: white;
      }

      .ingredienten ul,
      .verder ul,
      .bereiding ul {
        list-style: none;
        padding-left: 0;
      }

      .ingredienten ul li,
      .verder ul li,
      .bereiding ul li {
        position: relative;
        padding-left: 32px;
      }

      .ingredienten ul li::before,
      .verder ul li::before,
      .bereiding ul li::before {
        content: "✔";
        font-size: 1.2rem;
        position: absolute;
        left: 0;
        top: 3px;
        color: var(--theme);
        height: 24px;
        width: 24px;
        background-color: var(--light-theme);
        border-radius: 50%;
        text-align: center;
      }
    </style>
        ${processedHtml}
        <script>
        var utdElementSiteUrl = '${siteId}';
        var BLOGGER_URL = '/';
        <\/script>
        <script src='https://unpkg.com/swiper@6.1.2/swiper-bundle.min.js'><\/script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'><\/script>
        <script src='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.multi-platform.js'><\/script>
  `;
}
