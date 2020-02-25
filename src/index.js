import vorpalTool from 'vorpal'
import chalk from 'chalk'
import Robot from './robot'

const vorpal = vorpalTool()
const myRobot = new Robot(5)

vorpal
  .command('PLACE <x> <y> <facing>', 'PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.')
  .alias('place')
  .action(function(args, callback) {
    const {x,y,facing} = args
    try {
      const result = myRobot.place(x, y, facing.toUpperCase())
      if (result) this.log(chalk.green(result))
    } catch (e) {
      this.log(chalk.red(e.message))
    }
    callback();
  });

vorpal
  .command('MOVE', 'MOVE will move the toy robot one unit forward in the direction it is currently facing.')
  .alias('move')
  .action(function(args, callback) {
    try {
      const result = myRobot.move()
      if (result) this.log(chalk.green(result))
    } catch (e) {
      this.log(chalk.red(e.message))
    }
    callback();
  });

vorpal
  .command('RIGHT', 'RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.')
  .alias('right')
  .action(function(args, callback) {
    try {
      const result = myRobot.right()
      if (result) this.log(chalk.green(result))
    } catch (e) {
      this.log(chalk.red(e.message))
    }
    callback();
  });

vorpal
  .command('LEFT', 'RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.')
  .alias('left')
  .action(function(args, callback) {
    try {
      const result = myRobot.left()
      if (result) this.log(chalk.green(result))
    } catch (e) {
      this.log(chalk.red(e.message))
    }
    callback();
  });

vorpal
  .command('REPORT', 'REPORT will announce the X,Y and orientation of the robot.')
  .alias('report')
  .action(function(args, callback) {
    try {
      const result = myRobot.report()
      if (result) this.log(chalk.green(result))
    } catch (e) {
      this.log(chalk.red(e.message))
    }
    callback();
  });

vorpal
  .delimiter('🤖 $')
  .show();
