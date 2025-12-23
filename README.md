# Ivory Research Showcase

An interactive Jekyll-based showcase for exploring ivory materials through interdisciplinary research methods including scientific testing, oral history interviews, and archival research.

## Features

- **Scientific Testing Section**: Case studies demonstrating isotopic analysis, DNA testing, spectroscopy, and radiocarbon dating of ivory materials
- **Oral Histories Collection**: Interview transcripts and recordings from craftspeople, collectors, and communities
- **Archival Research**: Historical documents, trade records, and institutional archives
- **Interactive Explorer**: Filter and search across all research content with category and type filters
- **Responsive Design**: Mobile-friendly layout with clean, professional styling
- **Research Timeline**: Visual timeline showing project phases and ongoing investigations

## Getting Started

### Prerequisites

- Ruby 2.7 or higher
- Bundler (`gem install bundler`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anjapope/showcaseexperiment.git
   cd showcaseexperiment
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

## Project Structure

```
├── _case_studies/     # Scientific testing case studies
├── _interviews/       # Oral history interviews
├── _archives/         # Archival documents
├── _layouts/          # Page layout templates
├── _includes/         # Reusable HTML components
├── assets/
│   ├── css/          # Stylesheets
│   └── js/           # JavaScript for interactivity
├── _config.yml       # Jekyll configuration
└── *.html            # Main site pages
```

## Adding Content

### Case Studies

Create a new file in `_case_studies/` with the following front matter:

```yaml
---
title: "Your Case Study Title"
date: YYYY-MM-DD
category: "Analysis Type"
key_findings:
  - "Finding 1"
  - "Finding 2"
methodology: "Description of methods used"
---

Your case study content here...
```

### Interviews

Create a new file in `_interviews/` with:

```yaml
---
title: "Interview Title"
date: YYYY-MM-DD
interviewee: "Name and title"
location: "Interview location"
topics:
  - "Topic 1"
  - "Topic 2"
---

Interview transcript or summary...
```

### Archival Documents

Create a new file in `_archives/` with:

```yaml
---
title: "Document Title"
archive_date: "Original document date"
source: "Archive or institution name"
document_type: "Type of document"
collection: "Collection name"
---

Document description and analysis...
```

## Deployment

The site can be deployed to GitHub Pages or any static hosting service. Build the production site with:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site` directory.

## License

This project is for research showcase purposes.