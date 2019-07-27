export default {
  uniqueObjectInArr(array) {
    let result = []
    let map = new Map()
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (!map.has(item.id)) {
        map.set(item.id, true)
        result.push(item)
      }
    }
    return result
  }
}
