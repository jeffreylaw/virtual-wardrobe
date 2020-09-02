import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, Link, Redirect, useRouteMatch } from 'react-router-dom'
import tokenHelper from './services/tokenHelper'
import itemService from './services/items'
import outfitService from './services/outfits'
import ItemForm from './components/ItemForm/ItemForm'
import Login from './components/Login'
import Register from './components/Register'
import Items from './components/Items'
import Item from './components/Item'
import OutfitForm from './components/OutfitForm'
import Outfits from './components/Outfits'
import OutfitCard from './components/OutfitCard'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [outfits, setOutfits] = useState([])
  const [user, setUser] = useState(null)
  const navRef = useRef(null)
  const [responsiveMenu, setResponsiveMenu] = useState(false)

  useEffect(() => {
    if (user) {
      itemService.getAll().then(initialItems => {
        setItems(initialItems)
      })
      outfitService.getAll().then(initialOutfits => {
        setOutfits(initialOutfits)
      })
    }
  }, [user])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
      tokenHelper.setToken(user.token)
    }
  }, [])

  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
    setItems([])
    setOutfits([])
    tokenHelper.setToken(null)
  }

  const match = useRouteMatch({
    path: '/items/:id',
    strict: true
  })
  const item = match ? items.find(item => item.id === match.params.id) : null

  const outfitUrlMatch = useRouteMatch({
    path: '/outfits/:id',
    strict: true
  })
  const outfit = outfitUrlMatch ? outfits.find(outfit => outfit.id === outfitUrlMatch.params.id) : null

  return (
    <>
      <div className={responsiveMenu ? 'nav responsive' : 'nav'} ref={navRef}>
        <Link to="/" className="logo">Virtual Wardrobe</Link>
        {user && <Link to="/"><span>Home</span></Link>}
        {user && <Link to="/add-item"><span>Add Item</span></Link>}
        {user && <Link to="/create-outfit"><span>Create Outfit</span></Link>}
        {user && <Link to="/outfits"><span>Outfits</span></Link>}
        {!user && <Link to="/register"><span>Register</span></Link>}
        {user && <Link onClick={logout} to="/logout"><span>Logout ({user.username})</span></Link>}
        <a href="# " className="icon" onClick={() => setResponsiveMenu(!responsiveMenu)}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <Switch>
        <Route path="/outfits/:id">
          {outfit ? <OutfitCard outfit={outfit} outfits={outfits} setOutfits={setOutfits} /> : <Redirect to="/" />}
        </Route>
        <Route path="/outfits">
          <Outfits outfits={outfits} setOutfits={setOutfits} />
        </Route>
        <Route path="/create-outfit">
          <OutfitForm items={items} outfits={outfits} setOutfits={setOutfits} />
        </Route>
        <Route path="/items/:id">
          {item ? <Item item={item} items={items} setItems={setItems} /> : <Redirect to="/" />}
        </Route>
        <Route path="/add-item">
          <ItemForm items={items} setItems={setItems} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Redirect to="/" />
        </Route>
        <Route path="/">
          {user ? <Items items={items} setItems={setItems} /> : <Login setUser={setUser} />}
        </Route>
      </Switch>
    </>
  )
}

export default App;
