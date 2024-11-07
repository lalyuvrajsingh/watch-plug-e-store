const ProductSchema = ({ product }) => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "brand": {
      "@type": "Brand",
      "name": product.brandName
    },
    "description": product.description,
    "sku": product.sku,
    "offers": {
      "@type": "Offer",
      "url": product.url,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    },
    "authenticityVerification": {
      "@type": "Service",
      "serviceType": "Authentication",
      "provider": {
        "@type": "Organization",
        "name": "Luxury Authentication Services"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
}; 