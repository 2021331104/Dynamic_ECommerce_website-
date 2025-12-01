import { Search, Sparkles, Star, Filter } from "lucide-react";
import { categories } from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import Pagination from "../components/Products/Pagination";
import AISearchModal from "../components/Products/AISearchModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllProducts } from "../store/slices/productSlice";
import { toggleAIModal } from "../store/slices/popupSlice";
import { formatCurrency } from "../lib/currency";
const Products = () => {
  const {products,totalProducts}=useSelector((state)=>state.product);
  const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchTerm = query.get("search");
  const searchedCategory = query.get("category");

  const [searchQuery, setSearchQuery] = useState(searchTerm || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchedCategory || ""
  );

  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllProducts({
        category: selectedCategory,
        price: `${priceRange[0]}-${priceRange[1]}`,
        search: searchQuery,
        ratings: selectedRating,
        availability: availability,
        page: currentPage,
      })
    );
    }, [
      dispatch,
      selectedCategory,
      priceRange,
      searchQuery,
      selectedRating,
      availability,
      currentPage,
  ]);
  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  
};

export default Products;
