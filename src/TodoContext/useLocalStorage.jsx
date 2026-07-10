import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItems] = React.useState(initialValue)

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName)

    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)

    }
    setTimeout(() => {
      setLoading(false)
      setItems(parsedItem)
    }, 3000)

  }, [])

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }

  return {
    item,
    saveItems,
    loading,
    error
  }
}

export { useLocalStorage }