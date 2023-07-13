import express, { Required, Response } from 'express'

export function getHomePage(req: Required, res: Response) {
  res.status(200).send('<h1>Home Page</h1>')
}

export function getAboutPage(req: Required, res: Response) {
  res.status(200).send('<h1>About Page</h1>')
}

export function getUsers(req: Required, res: Response) {
  const users = [
    {
      name: 'Robert',
      age: 17,
      email: 'robert@gmail.com'
    },
    {
      name: 'Miguel',
      age: 17,
      email: 'miguel@gmail.com'
    }
  ]

  res.status(200).json(users)

}
