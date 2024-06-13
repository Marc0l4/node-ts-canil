import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {


    res.send('home');
};

export const dogs = async (req: Request, res: Response) => {


    res.send('dogs');
};

export const cats = async (req: Request, res: Response) => {


    res.send('cats');
};

export const fishes = async (req: Request, res: Response) => {


    res.send('fishes');
};

export const notFound = async (req: Request, res: Response) => {
    res.send('Pagina não encontrada');
};
