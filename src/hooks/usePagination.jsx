import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPaginationState, setCurrentPage, selectPaginatedData } from '../redux/slices/pagination/paginationSlice';

export const usePagination = (name, data, defaultItemsPerPage = 10) => {
  const dispatch = useDispatch();
  const paginationState = useSelector(state => state.pagination?.paginationState?.[name]);

  useEffect(() => {
    if (!paginationState) {
      dispatch(setPaginationState({
        name,
        currentPage: 1,
        itemsPerPage: defaultItemsPerPage
      }));
    }
  }, [dispatch, paginationState, name, defaultItemsPerPage]);

  const paginatedData = useMemo(() => {
    if (!paginationState || !data) {
      return { currentItems: [], totalPages: 0, currentPage: 1, itemsPerPage: defaultItemsPerPage };
    }

    const { currentPage = 1, itemsPerPage = defaultItemsPerPage } = paginationState;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return { currentItems, totalPages, currentPage, itemsPerPage };
  }, [data, paginationState, defaultItemsPerPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage({ name, page }));
  };

  return {
    ...paginatedData,
    setCurrentPage: handlePageChange
  };
};
