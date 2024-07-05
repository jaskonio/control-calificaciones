export interface BaseRepository<BaseModel> {
    getAll(): Promise<BaseModel[]>;
    save(data: any): Promise<BaseModel>;
    findById(id: number): Promise<BaseModel | null>;
    updateById(id: number, data: any): Promise<void | [number, BaseModel]>;
    deleteById(id: number): Promise<number>;
}