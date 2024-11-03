const { Router } = require("express");
const router = Router();
const TransacaoRouter = require("./transacao-router");
const UserRouter = require("./user-router");

router.use("/transicao", TransacaoRouter);
router.use("/user", UserRouter);

module.exports = router;
