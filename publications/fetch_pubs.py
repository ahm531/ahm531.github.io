from scholarly import scholarly
import json

# Your Google Scholar ID
scholar_id = "lfckvooAAAAJ"

# Fetch profile
print(f"Fetching data for Google Scholar ID: {scholar_id}")
author = scholarly.search_author_id(scholar_id)
author_filled = scholarly.fill(author, sections=["publications"])

# Get list of publications
publications = author_filled.get("publications", [])

# Optionally fill in each publication
detailed_pubs = []
for i, pub in enumerate(publications):
    print(f"Fetching publication {i + 1} of {len(publications)}: {pub['bib']['title']}")
    full_pub = scholarly.fill(pub)
    detailed_pubs.append(full_pub)

# Save to JSON
with open("publications.json", "w", encoding="utf-8") as f:
    json.dump(detailed_pubs, f, ensure_ascii=False, indent=2)

print("Done! Saved to publications.json")
