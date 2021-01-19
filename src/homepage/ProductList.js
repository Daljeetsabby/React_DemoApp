import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../actions/productAction'
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/productAction'
import { getProductById } from '../actions/productAction'
import { useHistory } from 'react-router-dom';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function ProductList() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [state, setstate] = useState({
    toggle: false,
    isId: true,
    isProductName: true,
    isQuantity: true,
    isManufacture: true,
    isDelete: true,
    isUpdate: true
  })
  const products = useSelector(state => state.ProductReducer.products);
  const loggedIn = localStorage.getItem("loggedIn");

  
  products.sort((a,b) => {
    return b.viewCounter -a.viewCounter;
  })

  var topfive=[]

  for(let i=0; i<5 ;i++){
    topfive.push(products[i])
    console.log(products[i]);
  }

  console.log(topfive);

  //console.log(JSON.stringify(products,true,2));

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch])

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  function handleDeleteProduct(id) {
    if (loggedIn){
      dispatch(removeProduct(id));
    }else
      history.push("/login")

  }

  function handlegetProductById(id) {
    if (loggedIn) {
       
      dispatch(getProductById(id));
      history.push("/updateProduct")
    } else
      history.push("/login")

  }

  function ViewProductById(id) {
    if (loggedIn) {
      dispatch(getProductById(id));
      history.push("/ViewProduct")
    } else
      history.push("/login")
  }

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-9 text-center" >
          <input
            type="text"
            placeholder="Search Product Items...."
            className="form-control "
            onChange={(e) => setSearch(e.target.value)}
            id="search"
          />
        </div>
        
        <div class="card col-md-3 ">
            <div class="card-header bg-white">
              <button class="btn btn-outline-success" onClick={() => setstate({ ...state, toggle: !state.toggle })} >Customize</button>
            </div>
            {state.toggle === true ? <div class="card-body">
              <form >
                <h6 class="card-title align-right">Customise View</h6>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item1" name="customitem" checked={state.isId} onChange={(e) => setstate({ ...state, isId: e.target.checked })} />
                    <label class="form-check-label" for="item1">Id</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item3" name="customitem" checked={state.isProductName} onChange={(e) => setstate({ ...state, isProductName: e.target.checked })} />
                    <label class="form-check-label" for="item3">Product Name</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item4" name="customitem" checked={state.isQuantity} onChange={(e) => setstate({ ...state, isQuantity: e.target.checked })} />
                    <label class="form-check-label" for="item4">Quantity</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item5" name="customitem" checked={state.isManufacture} onChange={(e) => setstate({ ...state, isManufacture: e.target.checked })} />
                    <label class="form-check-label" for="item5">Manufacturer</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item6" name="customitem" checked={state.isDelete} onChange={(e) => setstate({ ...state, isDelete: e.target.checked })} />
                    <label class="form-check-label" for="item4">Delete</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="item7" name="customitem" checked={state.isUpdate} onChange={(e) => setstate({ ...state, isUpdate: e.target.checked })} />
                    <label class="form-check-label" for="item5">Update</label>
                  </div>
                </div>
              </form>

            </div> : ''}
          </div>
          </div>
        <br />
        <div className="container question">
         <div className="question-container" >
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topfive}
              margin={{
                top: 5, right: 30, left: 0, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="viewCounter" fill="#da223d" />
            </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="row p-3 justify-content-around ">
        
          {filteredProducts && filteredProducts.map(Product => (
              
            <div class="card  text-center align-center m-4 " style={{ width: "250px" }} >

              <div class="card-header border 1px solid  " hidden={!state.isProductName} data-toggle="tooltip" data-placement="bottom" title="View Product">
                <h5 class="card-title " >
                  <Link onClick={() => ViewProductById(Product.id)} style={{ textDecoration: 'none' }}  >
                    <p>{Product.title} </p>
                  </Link> </h5>
              </div>
              <ul class="list-group list-group-flush ">
                <li class="list-group-item card-text " hidden={!state.isId} >
                  Product Id :  {Product.id}
                </li>
                <li class="list-group-item " hidden={!state.isQuantity}>Quantity : {Product.quantity}</li>
                <li class="list-group-item " hidden={!state.isManufacture}> Manufacturer : {Product.manufacturer}</li>
              </ul>
              <div class="card-body row">
                {Product.deleting ? <em> - Deleting...</em>
                  : Product.deleteError ? <span > - ERROR: {Product.deleteError}</span>
                    : <div className="col-md-6" hidden={!state.isDelete} > <  button className="btn btn-danger  " 
                    onClick= { () => loggedIn ?   window.confirm("Are you sure you wish to delete this Product?") &&  handleDeleteProduct(Product.id) : history.push('/login') } 
                    > Delete</button> 
                    </div>}
                <div className="col-md-6" hidden={!state.isUpdate}> <  button className="btn btn-success " onClick={ () => handlegetProductById(Product.id)}> update</button> </div>
              </div>
            </div>
          ))
          } 
        </div>
      </div>
    </>
  )
}


