# Zambia Geo Explorer 🇿🇲

[![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-64b5f6?logo=vitest)](https://vitest.dev/)
[![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive web dashboard for exploring Zambian geographic data. This app consumes the [zambia_geo_api](https://zambia-geo-api.onrender.com/) and provides a user-friendly interface to search for cities and view province-specific data.

## Features

- **Global City Search**: Fuzzy search functionality to find towns across Zambia.
- **Dynamic Province Routing**: Dedicated pages for each of the 10 provinces (e.g., `/province/Lusaka`).
- **Cold-Start Awareness**: Built-in UX notifications to handle free-tier hosting "sleep" cycles.
- **Mobile First**: Fully responsive design built with Tailwind CSS.

## Tech Stack (Required)

- **Framework**: React 18 (Vite)
- **Routing**: React Router 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + MSW (Mock Service Worker)


### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Deployment

* GitHub Pages / Netlify / Render static
---

##  Getting Started (Local Setup)

### Clone the Repository

```bash
git clone git@github.com:sangwani-coder/recruitment-2026-frontend.git
cd zambia-constituencies
```

---


### Install Dependacies

 	```bash
 	npm install
 	```

### Run the development server

 	npm run dev


 ## 🧪 Testing

We use Vitest for unit and integration testing. All API calls are mocked using MSW to ensure tests are fast and don't rely on a live network.

### Run tests
	
	npm test


### Run tests with coverage
	
	npm run coverage


🌐 Deployment & Cold Starts

This app connects to a FastAPI backend hosted Render free tier.

    Note: Because the API "sleeps" after some inactivity, the first search might take 30-60 seconds. The UI will display a "Server is waking up..." message during this period.

 ## Submission Checklist

Before submitting, ensure:

* [ ] All tests pass locally
* [ ] App is deployed
* [ ] Frontend uses deployed API URL
* [ ] README updated with live URLs

---

## Add Your Deployment URLs Here

```text
App URL: https://your-frontend-url
```

## Bonus (Optional)

You may optionally add:

* CI pipeline (GitHub Actions)

Bonus features are **not required** but may improve your evaluation.

---

## Evaluation Criteria

| Area 				| Weight 	| Description |
| ----------------| --------- |-------------|
| API Correctness | ⭐⭐⭐⭐ 	| "Efficient data fetching and proper handling of the Render ""cold start"" (loading states).|
| Code Clarity 	| ⭐⭐⭐ 	| Use of modern React patterns, semantic HTML, and clean Tailwind CSS structure.|
| Testing 			| ⭐⭐⭐⭐ 	| Resolving failing tests without ""cheating"" and ensuring high reliability.|
| Commit Quality 	| ⭐⭐⭐ 	| Use of Conventional Commits (e.g., fix:, feat:) and an atomic, readable history.|
| Communication 	| ⭐⭐⭐ 	| Clarity and technical depth of the video explanation.|

---

## Notes

* Focus on **clarity and correctness**, not over‑engineering
* Write readable code
* Handle errors gracefully
* Commit regularly with meaningful messages

Good luck 🚀