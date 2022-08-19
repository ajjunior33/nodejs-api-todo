const Todo = require("../models/Todo")
module.exports = {
  async index(request, response) {
    try {

      const {
        userId
      } = request;

      const list = await Todo.find({
        userId
      });

      return response.status(200).json({
        message: "Listagem de tarefas",
        list
      });

    } catch (err) {
      return response.status(400).json({
        error: "Não foi possível listar as tarefas."
      });
    }
  },
  async show(request, response) {
    try {

      const {
        id
      } = request.params;

      const {
        userId
      } = request;

      console.log(id);

      const show = await Todo.findOne({
        _id: id,
        userId
      });
      console.log(show);

      if (!show) return response.status(400).json({
        error: "Tarefa não encontrada."
      });


      if (String(show.userId) !== userId) return response.status(400).json({
        error: "Tarefa não encontrada."
      });


      return response.status(200).json({
        message: "Tarefa solicitada",
        show
      });

    } catch (err) {
      return response.status(400).json({
        error: "Tarefa não encontrada."
      });
    }
  },
  async store(request, response) {
    try {

      const {
        title,
        description,
        public
      } = request.body;


      const {
        userId
      } = request;

      const create = await Todo.create({
        title,
        description,
        userId,
        public
      });

      return response.status(200).json({
        message: "Tarefa cadastrada com sucesso",
        create
      })

    } catch (err) {
      return response.status(400).json({
        error: "Tarefa não encontrada."
      });
    }
  },
  async update(request, response) {
    try {

      const {
        userId
      } = request;

      const {
        id
      } = request.params;

      const {
        title,
        description,
        public
      } = request.body

      const findTodo = await Todo.findOne({
        _id: id,
        userId
      });


      if (!findTodo) return response.status(400).json({
        error: "Tarefa não encontrada.",
        status: false
      });


      const update = await Todo.updateOne({
        _id: id,
        userId
      }, {
        title,
        description,
        public
      });

      return response.status(200).json({
        message: "Tarefa editada com sucesso"
      })
    } catch (err) {
      return response.status(400).json({
        error: "Tarefa não encontrada."
      });
    }
  },
  async destroy(request, response) {
    try {

      const {
        id
      } = request.params;

      const {
        userId
      } = request;

      const findTodo = await Todo.findOne({
        _id: id,
        userId
      });

      if (!findTodo) {
        return response.status(400).json({
          error: "Tarefa não encontrada.",
          status: false
        })
      }

      const destroyTodo = await Todo.deleteOne({
        _id: id,
        userId: userId
      });


      return response.status(200).json({
        message: "Tarefa excluída com sucesso",
        status: true
      })

    } catch (err) {
      return response.status(400).json({
        error: "Não foi possível deletar essa tarefa."
      })
    }
  }
}
