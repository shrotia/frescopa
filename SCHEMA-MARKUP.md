# Schema Markup Documentation

This document outlines all the schema markup (structured data) added to the Frescopa website to improve SEO and enable rich search results.

## Schema Types Implemented

### 1. **FAQ Schema** (`contact.html`)
- **Type:** FAQPage
- **Purpose:** Enables FAQ rich snippets in Google search results
- **Coverage:** 8 frequently asked questions about shipping, freshness, subscriptions, returns, etc.
- **Benefits:** 
  - Appears in Google's "People also ask" section
  - Increases visibility in voice search results
  - Can display directly in search results

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

## Files Modified

1. `contact.html` - FAQ and LocalBusiness schema
2. `about.html` - Organization and AboutPage schema
3. `brewing-guides.html` - HowTo schema for brewing methods
4. `index.html` - BreadcrumbList, ItemList, and enhanced Product schema
5. `products.html` - Already had Product schema (maintained)

---

**Last Updated:** December 2024  
**Version:** 1.0

