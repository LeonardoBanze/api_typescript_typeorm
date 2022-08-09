import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectControlller {

   async create(req: Request,res:Response){
    // criar controlador
    const {name} = req.body

    if (!name){
        return res.status(400).json({massage: 'nome nao chegou'})
    }try{

        const newSubject = SubjectRepository.create({name})

        await SubjectRepository.save(newSubject);

        return res.status(201).json(newSubject )

    }catch(error){
        console.log(error);
        return res.status(500).json({massage:'internal server error'})

    }
   }
}