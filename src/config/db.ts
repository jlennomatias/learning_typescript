import mongoose from 'mongoose';

const url = 'mongodb://root:mongopass@172.25.0.3:27017/apiTestDB';

const db = async () => {
    try {
        await mongoose.connect(url);
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro de conexão ao MongoDB:', error);
    }
};

export default db;
