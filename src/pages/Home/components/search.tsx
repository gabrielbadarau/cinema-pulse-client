import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    if (search && search.trim() !== searchTerm) {
      setSearchTerm(search);
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (debouncedSearchTerm.trim() === '') {
      queryParams.delete('search');
    } else {
      queryParams.set('search', debouncedSearchTerm);
    }

    navigate(`?${queryParams.toString()}`, { replace: true });
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
