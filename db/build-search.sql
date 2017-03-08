INSERT INTO "Search" (id, name, profile_type, document)
SELECT
id,
name,
'country' as profile_type,
to_tsvector(name)
from "Countries";

INSERT INTO "Search" (id, name, profile_type, document)
SELECT
id,
name,
'product' as profile_type,
to_tsvector(name)
from "Products";
