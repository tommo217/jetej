import JetejParserVisitor from "../gen/JetejParserVisitor.js";
import GameNode from "./GameNode.js";
import NegativeOpNode from "./NegativeOpNode.js";
import OperatorNode from "./OperatorNode.js";
import IfNode from "./IfNode.js";
import ObjectNode from "./ObjectNode.js";
import EventNode from "./EventNode.js";
import FunCallNode from "./FunCallNode.js";
import ExpNode from "./ExpNode.js";
import programNode from "./ProgramNode.js";
import BlockNode from "./BlockNode.js"
import FunctionNode from "./FunctionNode.js";
import AssignNode from "./AssignNode.js";
import parenExpNode from "./ParenExpNode.js";
import AttributeNode from "./AttributeNode.js";
export default class parserTreetoAST extends JetejParserVisitor{
    // Visit a parse tree produced by JetejParser#program.
	visitProgram(ctx) {
        var blockList = [];
        let gameNode = ctx.game().accept(this);
        blockList.push(gameNode);
        ctx.object().forEach(element => {
            blockList.push(element.accept(this));
        });
        ctx.event().forEach(element => {
            blockList.push(element.accept(this));
        });
        ctx.function_().forEach(element => {
            blockList.push(element.accept(this));
        });
        let programnode =  new programNode(blockList);
        return programnode;
      }





      // Visit a parse tree produced by JetejParser#game.
      visitGame(ctx) {

        let game_background = null;
        let width = null;
        let height = null;
        let game_score = null;
        let initList = [];
        if(ctx.game_background(0)!=null){game_background = ctx.game_background(0).IDENTIFIER().getText();}
        if(ctx.width(0)!=null){width = parseInt(ctx.width(0).INTEGER().getText());}
        if(ctx.height(0)!=null){height = parseInt(ctx.height(0).INTEGER().getText());}
        if(ctx.game_score(0)!=null){game_score = parseInt(ctx.game_score(0).INTEGER().getText());}
        if(ctx.init(0)!=null){
          ctx.init(0).funCall().forEach(element => {
            initList.push(element.accept(this));
        });}
        let gameNode =  new GameNode(game_background,width,height,game_score,initList);
        return gameNode;
      }


      // Visit a parse tree produced by JetejParser#object.
      visitObject(ctx) {
        var name = ctx.name().IDENTIFIER().getText();
        let image = null,life = null,speed_x=null, speed_y=null, width=null,
         height=null, mass=null, bounce=null, isCollision=null, update=[];
        if(ctx.object_image(0)!=null){image = ctx.object_image(0).FILE_PATH().getText();}
        if(ctx.object_life(0)!=null)life = parseInt(ctx.object_life(0).INTEGER().getText());
        if(ctx.object_speed_x(0)!=null)speed_x = ctx.object_speed_x(0).expression().accept(this);
        if(ctx.object_speed_y(0)!=null)speed_y = ctx.object_speed_y(0).expression().accept(this);
        if(ctx.object_size_x(0)!=null)width = ctx.object_size_x(0).expression().accept(this);
        if(ctx.object_size_y(0)!=null)height = ctx.object_size_y(0).expression().accept(this);
        if(ctx.object_mass(0)!=null)mass = parseInt(ctx.object_mass(0).INTEGER().getText());
        if(ctx.object_bounce(0)!=null)bounce = parseInt(ctx.object_bounce(0).INTEGER().getText());
        if(ctx.object_collision(0)!=null)isCollision  = ctx.object_collision(0).BOOL().getText();
        if(ctx.object_update(0)!=null){
            ctx.object_update(0).funCall().forEach(element => {
            update.push(element.accept(this));
        });}
        let  objectNode = new ObjectNode(name, image, life, speed_x, speed_y, width, height, mass, bounce, isCollision, update);

        return objectNode;
      }





      // Visit a parse tree produced by JetejParser#event.
      visitEvent(ctx) {
        let obj1 = null;
        let obj2 = null;
        obj1 = ctx.event_object1().IDENTIFIER().getText();
        obj2 = ctx.event_object2().IDENTIFIER().getText();
        let actions = [];
        ctx.event_actions(0).funCall().forEach(element => {
            actions.push(element.accept(this));
        });
        let eventNode = new EventNode(obj1,obj2,actions);

        return eventNode;
      }







      // Visit a parse tree produced by JetejParser#function.
      visitFunction(ctx) {
        let name = ctx.name().IDENTIFIER().getText();
        let param = ctx.function_param(0).accept(this);
        let body = ctx.function_body(0).accept(this);
        let fun =  new FunctionNode(name,param,body);

        return fun;
      }


      // Visit a parse tree produced by JetejParser#function_param.
      visitFunction_param(ctx) {
        let params = [];
        ctx.IDENTIFIER().forEach(element => {
            params.push(element.getText());
        });
        return params;
      }


      // Visit a parse tree produced by JetejParser#function_body.
      visitFunction_body(ctx) {
        return ctx.block().accept(this);
      }


      // Visit a parse tree produced by JetejParser#constant.


      // Visit a parse tree produced by JetejParser#block.
      visitBlock(ctx) {
        let lines = [];
        ctx.line().forEach(element=>{
            lines.push(element.accept(this));
        });
        return new BlockNode(lines);
      }


      // Visit a parse tree produced by JetejParser#line.
      visitLine(ctx) {
        if (ctx.statement()!=null){
            return ctx.statement().accept(this);
        }
        if (ctx.ifBlock()!=null){
            return ctx.ifBlock().accept(this);
        }

      }

      // Visit a parse tree produced by JetejParser#object_attribute.
      visitObject_attribute(ctx) {
        return new AttributeNode(ctx.IDENTIFIER(0).getText(), ctx.IDENTIFIER(1).getText())
      }


      // Visit a parse tree produced by JetejParser#statement.
      visitStatement(ctx) {
        if(ctx.assignment()!=null){
            return ctx.assignment().accept(this);
        }
        if(ctx.funCall()!=null){
            return ctx.funCall().accept(this);
        }

      }


      // Visit a parse tree produced by JetejParser#ifBlock.
      visitIfBlock(ctx) {
        let condition = ctx.expression().accept(this);
        let lengthStatement = ctx.statement().length;
        let ifTrue = null;
        let ifFalse = null;
        ifTrue  = ctx.statement(0).accept(this);
        if (lengthStatement > 1){
            ifFalse = ctx.statement(1).accept(this);

        }
        let ifnode =  new IfNode(condition,ifTrue,ifFalse);

        return ifnode;
      }


      // Visit a parse tree produced by JetejParser#assignment.
      visitAssignment(ctx) {
        let id = null;
        if(ctx.IDENTIFIER()!=null){
            id = ctx.IDENTIFIER().getText();
        }else if(ctx.object_attribute()!=null){
            id = ctx.object_attribute().accept(this);
        }
        let exp = ctx.expression().accept(this);
        return new AssignNode(id,exp);
      }


      // Visit a parse tree produced by JetejParser#negativeExpression.
      visitNegativeExpression(ctx) {
        let not = ctx.MINUS().getText();
        let exp = ctx.expression().accept(this);
        let neg = new NegativeOpNode(not,exp);

        return new ExpNode(neg);
      }


      // Visit a parse tree produced by JetejParser#constantExpression.
      visitConstantExpression(ctx) {

        if (ctx.constant().INTEGER()!=null){
            return new ExpNode(parseInt(ctx.constant().INTEGER().getText()));
        }
        if (ctx.constant().BOOL()!=null){
            let x =  true;
            if (ctx.constant().BOOL().getText()=="false"){
                x = false;
            }
            return new ExpNode(x);
        }

      }


      // Visit a parse tree produced by JetejParser#additiveExpression.
      visitAdditiveExpression(ctx) {
        let lExp = ctx.expression(0).accept(this);
        let rExp = ctx.expression(1).accept(this);
        let operator = null;
        if (ctx.ADD()!=null){
            operator = ctx.ADD().getText();
        }else if(ctx.MINUS()!=null){
            operator = ctx.MINUS().getText();
        }
        let opnode = new OperatorNode(lExp,rExp,operator);
        let expnode = new ExpNode(opnode);

        return expnode;
      }


      // Visit a parse tree produced by JetejParser#identifierExpression.
      visitIdentifierExpression(ctx) {
        return new ExpNode(ctx.IDENTIFIER().getText());
      }


      // Visit a parse tree produced by JetejParser#funCallExpression.
      visitFunCallExpression(ctx) {
        let funNode = ctx.funCall().accept(this);
        let expnode = new ExpNode(funNode);


        return expnode;
      }


      // Visit a parse tree produced by JetejParser#notExpression.
      visitNotExpression(ctx) {

        let exp = ctx.expression().accept(this);
        let notExp = new NotOpNode(exp);
        return new ExpNode(notExp);
      }


      // Visit a parse tree produced by JetejParser#comparisonExpression.
      visitComparisonExpression(ctx) {
        let lExp = ctx.expression(0).accept(this);
        let rExp = ctx.expression(1).accept(this);
        let operator = null;
        operator = ctx.COMPARE_OP().getText();

        let opnode = new OperatorNode(lExp,rExp,operator);
        let expnode = new ExpNode(opnode)

        return expnode;
      }


      // Visit a parse tree produced by JetejParser#parenExpression.
      visitParenExpression(ctx) {
        let exp = ctx.expression().accept(this);
        let paren = new parenExpNode(exp);

        return new ExpNode(paren);
      }



      // Visit a parse tree produced by JetejParser#multiplicativeExpression.
      visitMultiplicativeExpression(ctx) {
        let lExp = ctx.expression(0).accept(this);
        let rExp = ctx.expression(1).accept(this);
        let operator  = ctx.MULTIOP().getText();

        let opnode = new OperatorNode(lExp,rExp,operator);
        return new ExpNode(opnode);
      }

      // Visit a parse tree produced by JetejParser#object_attributeExpression.
      visitObject_attributeExpression(ctx) {
      	  return new ExpNode(ctx.object_attribute().accept(this));
      }


      // Visit a parse tree produced by JetejParser#booleanExpression.
      visitBooleanExpression(ctx) {
        let lExp = ctx.expression(0).accept(this);
        let rExp = ctx.expression(1).accept(this);
        let operator  = ctx.BOOL_OP().getText();
        let opnode = new OperatorNode(lExp,rExp,operator);
        return new ExpNode(opnode);
      }


      // Visit a parse tree produced by JetejParser#funCall.
      visitFunCall(ctx) {
        let name = ctx.IDENTIFIER().getText();
        let params =[];
        ctx.expression().forEach(element => {
            params.push(element.accept(this));
        });
        let fun = new FunCallNode(name,params)
        return fun;
      }
  
}