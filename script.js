    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#000000', '#000000', '#000000'];
    const numParticles = 100;
    const particles = [];
    const buttonRadius = 100;
    const minDistance = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = {
          x: Math.random() * 0.1,
          y: Math.random() * 0.1
        };
        this.originalColor = this.color;
      }

      update() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.x < -50) {
          this.x = canvas.width + 50;
        }
        if (this.x > canvas.width + 50) {
          this.x = -50;
        }
        if (this.y < -50) {
          this.y = canvas.height + 50;
        }
        if (this.y > canvas.height + 50) {
          this.y = -50;
        }

        const distanceToButton = Math.sqrt(Math.pow(this.x - canvas.width/2, 2) + Math.pow(this.y - canvas.height/2, 2));
        if (distanceToButton < buttonRadius) {
          const alpha = (buttonRadius - distanceToButton) / buttonRadius;
          this.color = `rgba(255, 255, 255, ${alpha})`;
        } else if (distanceToButton >= buttonRadius && distanceToButton < buttonRadius + minDistance) {
          const alpha = (distanceToButton - buttonRadius) / minDistance;
          this.color = `rgba(255, 255, 255, ${alpha})`;
        } else {
          this.color = this.originalColor;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    function init() {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    }

    init();
    animate();

