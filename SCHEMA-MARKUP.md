# Schema Markup Documentation

This document outlines all the schema markup (structured data) added to the Frescopa website to improve SEO and enable rich search results.

## Schema Types Implemented

### 1. **FAQ Schema** (Multiple Pages)

#### a. **Contact Page FAQ** (`contact.html`)
- **Type:** FAQPage
- **Purpose:** Visible FAQ section with schema markup
- **Coverage:** 8 frequently asked questions about shipping, freshness, subscriptions, returns, etc.
- **Benefits:** 
  - Appears in Google's "People also ask" section
  - Increases visibility in voice search results
  - Can display directly in search results

#### b. **Products Page FAQ** (`products.html`) - **INVISIBLE**
- **Type:** FAQPage (JSON-LD only, not visible on page)
- **Coverage:** 8 coffee education questions:
  - What is single origin coffee?
  - What does roast level mean?
  - How long does coffee stay fresh?
  - Arabica vs Robusta differences
  - Fair Trade certification
  - Whole bean vs ground
  - Altitude effects on flavor
  - Coffee processing methods
- **Purpose:** Answer common product-related questions in search results

#### c. **Brewing Guides Page FAQ** (`brewing-guides.html`) - **INVISIBLE**
- **Type:** FAQPage (JSON-LD only, not visible on page)
- **Coverage:** 9 brewing technique questions:
  - Best coffee to water ratio
  - Why coffee is bitter or sour
  - Cold brew instructions
  - Espresso grind size
  - Equipment cleaning
  - Coffee blooming process
  - Reusing coffee grounds
  - Latte vs cappuccino differences
- **Purpose:** Provide brewing help in voice search and "People also ask"

#### d. **About Page FAQ** (`about.html`) - **INVISIBLE**
- **Type:** FAQPage (JSON-LD only, not visible on page)
- **Coverage:** 9 company and sustainability questions:
  - Direct trade explanation
  - Sustainability practices
  - Coffee sourcing origins
  - Certifications
  - Quality assurance process
  - Specialty coffee definition
  - Company history
  - Roastery visits
  - Return policy
- **Purpose:** Establish brand authority and answer company-related queries

#### e. **Home Page FAQ** (`index.html`) - **INVISIBLE**
- **Type:** FAQPage (JSON-LD only, not visible on page)
- **Coverage:** 9 subscription and ordering questions:
  - How subscriptions work
  - Changing subscriptions
  - Subscription box contents
  - Minimum commitment
  - Gift subscriptions
  - Caffeine content
  - Coffee quiz explanation
  - Payment methods
  - Shipping timeframes
- **Purpose:** Answer purchase-related questions before users even visit FAQ page

### 2. **LocalBusiness Schema** (`contact.html`)
- **Type:** CoffeeShop
- **Purpose:** Provides detailed business information for local search and Google Maps
- **Includes:**
  - Complete address and contact information
  - Opening hours specification (Mon-Sun)
  - Geolocation coordinates
  - Price range and accepted payments
  - Social media links
- **Benefits:**
  - Appears in Google Maps and local pack results
  - Enables "Open Now" badges
  - Shows business hours directly in search

### 3. **Enhanced Organization/Knowledge Graph Schema** (`about.html`)
- **Type:** Organization
- **Purpose:** Creates a comprehensive knowledge graph entity for the brand
- **Includes:**
  - Company history (founding date, location)
  - Founder and employee information
  - Contact points with availability
  - Areas served (US, Canada)
  - Certifications and awards
  - Aggregate ratings (4.9/5 from 2,547 reviews)
  - Knowledge areas and expertise
- **Benefits:**
  - Powers Google Knowledge Panel
  - Improves brand entity recognition
  - Enhances brand authority signals

### 4. **AboutPage Schema** (`about.html`)
- **Type:** AboutPage
- **Purpose:** Identifies the about page and links to organization entity
- **Benefits:** Better page categorization for search engines

### 5. **HowTo Schema** (`brewing-guides.html`)
- **Type:** HowTo (2 guides)
- **Coverage:**
  - Perfect Pour-Over Coffee Brewing Technique
  - French Press Coffee Brewing Mastery
- **Includes:**
  - Step-by-step instructions
  - Required supplies and tools
  - Time estimates
  - Yield information
- **Benefits:**
  - Eligible for rich results with step thumbnails
  - Can appear in Google Assistant and voice search
  - Featured in "How-to" search results

### 6. **Product Schema** (`index.html`, `products.html`)
- **Type:** Product with Offers
- **Coverage:** All coffee products
- **Includes:**
  - Product names and descriptions
  - Pricing and availability
  - Images
  - Aggregate ratings
- **Benefits:**
  - Product rich snippets with price and availability
  - Appears in Google Shopping results
  - Shows star ratings in search results

### 7. **Recipe Schema** (`index.html`, `brewing-guides.html`)
- **Type:** Recipe
- **Coverage:** Coffee recipes (Cold Brew, Cappuccino, V60 Pour-Over, etc.)
- **Includes:**
  - Ingredients and instructions
  - Prep time and total time
  - Servings/yield
  - Aggregate ratings
- **Benefits:**
  - Eligible for recipe rich results
  - Can appear in recipe carousels
  - Shows ratings and cooking time in search

### 8. **Service Schema** (`index.html`)
- **Type:** Service with OfferCatalog
- **Coverage:** Coffee subscription service with 3 tiers
- **Includes:**
  - Subscription plan details
  - Monthly pricing
  - Plan features
- **Benefits:**
  - Appears in service-related searches
  - Can display pricing in search results

### 9. **WebSite Schema** (`index.html`)
- **Type:** WebSite with SearchAction
- **Purpose:** Enables site search functionality in search results
- **Benefits:**
  - Sitelinks search box in Google results
  - Direct search from Google's search page

### 10. **BreadcrumbList Schema** (`index.html`)
- **Type:** BreadcrumbList
- **Purpose:** Defines site navigation hierarchy
- **Includes:** All main navigation pages
- **Benefits:**
  - Breadcrumb trail in search results
  - Better site structure understanding
  - Improved navigation UX

### 11. **ItemList Schema** (`index.html`)
- **Type:** ItemList
- **Purpose:** Organizes product collection
- **Coverage:** Featured coffee products collection
- **Benefits:**
  - Carousel eligibility in search results
  - Better product organization
  - Can appear in product lists

### 12. **VideoObject Schema** (`index.html`, `brewing-guides.html`)
- **Type:** VideoObject
- **Coverage:** Video testimonials and brewing tutorials
- **Includes:**
  - Video metadata
  - Duration and upload date
  - Descriptions
- **Benefits:**
  - Video rich results
  - Appears in Google Video search
  - Can show video thumbnails in search

## Schema Benefits Summary

### SEO & Search Visibility
- **Rich Snippets:** Enhanced search results with ratings, prices, and images
- **Knowledge Panel:** Brand information displayed prominently in search
- **Featured Snippets:** Increased chance of appearing in position zero
- **Voice Search:** Optimized for voice assistants and smart speakers

### User Experience
- **Quick Answers:** Users can find information directly in search results
- **Visual Results:** More engaging search results with images and structured data
- **Local Discovery:** Easier to find business location and hours

### Technical SEO
- **Better Crawling:** Search engines understand content structure better
- **Entity Recognition:** Establishes brand as a recognized entity
- **Content Classification:** Pages are properly categorized by type

## Validation

All schema markup has been structured according to Schema.org standards and should be validated using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data)

## Next Steps

1. **Validation:** Test all pages with Google Rich Results Test
2. **Monitoring:** Track rich result performance in Google Search Console
3. **Expansion:** Consider adding more schema types:
   - Review schema for customer testimonials
   - Event schema for cupping sessions
   - Course schema for brewing workshops
   - Blog posting schema for articles

## Invisible FAQ Strategy

**43 Total FAQ Questions** across 5 pages provide comprehensive coverage of topics users search for:

### Why Invisible FAQs?
- **Not cluttering page content** - Pages remain clean and focused on their primary purpose
- **Search engine discovery** - Questions appear in "People also ask" and voice search
- **Semantic relevance** - Each page's FAQs match its topic (products, brewing, company, subscriptions)
- **Competitive advantage** - Answer questions before users even visit competitor sites
- **Long-tail keywords** - Target specific questions people ask about coffee

### Coverage Breakdown:
- **Product Education**: 8 FAQs (products page)
- **Brewing Techniques**: 9 FAQs (brewing guides page)  
- **Company/Sustainability**: 9 FAQs (about page)
- **Subscriptions/Orders**: 9 FAQs (home page)
- **Customer Service**: 8 FAQs (contact page - visible)

**Total: 43 strategically placed FAQ items** optimized for search discovery and voice assistants.

## Files Modified

1. `contact.html` - FAQ and LocalBusiness schema (visible FAQs + JSON-LD)
2. `about.html` - Organization, AboutPage, and invisible FAQ schema
3. `brewing-guides.html` - HowTo schema and invisible FAQ schema
4. `index.html` - BreadcrumbList, ItemList, Product, and invisible FAQ schema
5. `products.html` - Product schema and invisible FAQ schema
6. `SCHEMA-MARKUP.md` - This documentation file

---

**Last Updated:** December 2024  
**Version:** 1.0

