'use client'
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import ProductCard from './ProductCard';
import { where } from 'firebase/firestore';


function ProductGallery({ initialCategory = 'All', hideCategoryDropdown = false }) {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [sortType, setSortType] = useState('newest');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            let q;
            if (selectedCategory !== 'All') {
                q = query(collection(db, 'products'), where('category', '==', selectedCategory), orderBy('date', 'desc'));
            } else {
                q = query(collection(db, 'products'), orderBy('date', 'desc'));
            }

            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(fetchedProducts);
                setDisplayProducts(fetchedProducts); // Apply filtering and sorting if needed
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    useEffect(() => {
        // Sorting and searching logic
        let sortedProducts = [...products];
        if (sortType === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.sellingPrice - b.sellingPrice);
        } else if (sortType === 'highToLow') {
            sortedProducts.sort((a, b) => b.sellingPrice - a.sellingPrice);
        }
        if (searchTerm) {
            sortedProducts = sortedProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        setDisplayProducts(sortedProducts);
    }, [products, sortType, searchTerm]);

    return (
        <div className="container w-fit mx-auto px-1 lg:px-4 py-1 lg:py-6">
            <div className="flex justify-between items-center mb-4">


                <input 
                    type="text"
                    placeholder="Search by name or brand..."
                    className="p-2 w-fit rounded-xl border mx-3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <div className='flex flex-col justify-between w-fit'>
                {!hideCategoryDropdown && (
                    <select 
                        className="mx-2 text-sm  rounded-xl lg:text-md"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Watch">Watches</option>
                        <option value="Purse">Purses</option>
                        <option value="Merch">Merch</option>
                    </select>
                )}

                

                <select 
                    className="mx-2 text-sm rounded-xl lg:text-md"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="newest" >Newest</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                </div>
            </div>
            {displayProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {displayProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default ProductGallery;