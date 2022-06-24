import React from 'react';
import './App.css'
// import Pagination from './Pagination'
// import ChangeapiSelector from './Components/ChangeapiSelector'
import ReactPaginate from 'react-paginate';



function Paginate(){
    const [data , setData]=useState(1)
  const handlePageClick=(data)=>{
    setData(data.selected)
  }
  return(
    <>
    {/* <Pagination/> */}
    <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={"..."}
    pageCount={30}
    marginPagesDisplayed={5}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    // css apply on pagination
    containerClassName={'pagination justify-content-center py-3'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}

    />
    
   </>
   
    
  )
}
export default Paginate;    