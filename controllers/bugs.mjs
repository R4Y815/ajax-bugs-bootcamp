export default function initBugsController(db) {
  const index = async (_, response) => {
    try {
      const bugs = await db.Bug.findAll();
      response.send({ bugs });
    } catch (error) {
      console.log(error);
    }
  };

  const createBug = async (request, response) => {
    try {
      console.log('request.body =', request.body);

      const bug = {
        problem: request.body.problem,
        error_text: request.body.errorText,
        commit: request.body.commit,
      };
      console.log('bug =', bug);
      await db.Bug.create(bug);
      response.send('Added bug to database!');
    } catch (error) {
      console.log(error);
    }
  };
  return {
    index,
    createBug,
  };
}
