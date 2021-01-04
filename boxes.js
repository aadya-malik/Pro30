class Boxes
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			'restitution':1,
			'friction':0.4,
			'density':0.8

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y, 70,70, options)
		World.add(world, this.body);

	}
	display()
	{
			
		if(this.body.speed<5){
			//var angle=this.body.angle;
			push ();
			//translate(this.body.position.x,this.body.position.y);
			//rotate(angle);
			rectMode(CENTER);
			fill("blue");
			rect(this.body.position.x,this.body.position.y,40,50);
	
			pop();
			}
			else{
				World.remove(world,this.body)
					push ()
					this.visibility=this.visibility-5;
					tint(255,this.visibility)
				
					pop ()
	
				}
			}
	
	}

