import fs from 'fs/promises'

const readDataTask = async () => {
  try {
    const data = await fs.readFile('src/data/tasks.json', 'utf-8')
    return console.log(data)
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

export { readDataTask }
