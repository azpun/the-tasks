import fs from 'fs/promises'

const readUserData = async () => {
  try {
    const data = await fs.readFile('src/data/users.json', 'utf-8')
    return console.log(data)
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

const createUserData = async () => {}

export { readUserData, createUserData }
