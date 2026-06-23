# 🇵🇰 Pakistan Data Bank

A React web application that visualises decades of Pakistan's economic, social, and demographic data using the World Bank Open Data API. Explore key indicators across time, filter by year range, and view trends as line charts, bar charts, or raw data tables.

**Live Demo:** [pakistan-data-bank.vercel.app](https://pakistan-data-bank.vercel.app)

---

## Features

- **Home** — Quick-glance stat cards showing the latest values for GDP, Population, Literacy Rate, and Inflation Rate
- **Trends** — Pick any indicator, filter by a custom year range, and switch between Line Chart, Bar Chart, or Data Table views
- **Auto-generated Insights** — Each indicator shows a summary of how it changed over time, including peak and lowest values
- **Live Data Caching** — Once an indicator is fetched, it's cached in memory so switching back to it is instant with no repeated API calls
- **Responsive Design** — Built with Bootstrap 5, works cleanly on mobile, tablet, and desktop

---

## Tech Stack

- **React 19** + **Vite**
- **React Router v7** — client-side routing
- **Context API + useReducer** — global state management and in-memory data caching
- **Custom Hooks** — `useWorldBank` for data fetching, `useYearFilter` for shared filtering logic
- **useMemo** — for derived/computed values (chart slicing, statistics, Y-axis scaling)
- **Recharts** — Line and Bar chart visualisations
- **Bootstrap 5** — layout and UI components
- **React Icons**
- **World Bank Open Data API** — live data source, no authentication required

---

## Running Locally

```bash
git clone https://github.com/code-runner006/pakistan-data-bank.git
cd pakistan-data-bank
npm install
npm run dev
```

---

## Built By

**Umer Farooq Afridi**
BS Computer Science — PUCIT, University of the Punjab

[GitHub](https://github.com/code-runner006) · [LinkedIn](https://linkedin.com/in/umerfarooqafridi)
