import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setFilter(data);
    }, [data])

    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")

        setData(await response.json())
        setLoading(false)
    }

    const Loading = () => {
        return (
            <>
             <div className="mt-4 ">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedItems = data.filter((item) => item.category === cat)
        setFilter(updatedItems)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <Button onClick={() => setFilter(data)} className='me-2' variant="outline-dark">Tous</Button>
                    <Button onClick={() => filterProduct("men's clothing")} className='me-2' variant="outline-dark">Hommes</Button>
                    <Button onClick={() => filterProduct("women's clothing")} className='me-2' variant="outline-dark">Femmes</Button>
                    <Button onClick={() => filterProduct("jewelery")} className='me-2' variant="outline-dark">Bijoux</Button>
                    <Button onClick={() => filterProduct("electronics")} className='me-2' variant="outline-dark">Electroniques</Button>
                </div>
                {filter.map((item) => {
                    return (
                        <div className="col-3 mt-5">
                            <Card key={item.id} className="border border-dark">
                                <Card.Img variant="top" style={{ height: '300px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                         {item.price} Dhs
                                    </Card.Text>
                                    <Link to={`/products/${item.id}`}> <Button variant="dark">Voir</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 '>Nos Produits</h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>   
               
        </div>
        
    )
}

export default Products
