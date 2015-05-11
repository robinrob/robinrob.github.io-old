module.exports = function(grunt) {
  // Combine all files in src/
  grunt.initConfig({
    uglify: {
      all_src : {
        options : {
          sourceMap : true,
          sourceMapName : 'sourceMap.map'
        },
        src: [
          "main.js",
          "src/functions.js",
          "src/globals.js",
          "src/ui.js",

          "src/physics/_StaticBody.js",
          "src/physics/_CompositeStaticBody.js",
          "src/physics/_CompositeDynamicBody.js",
          "src/physics/_DynamicBody.js",
          "src/physics/RectBody.js",
          "src/physics/StaticRectBody.js",
          "src/physics/CircBody.js",
          "src/physics/RectPhysicsSprite.js",
          "src/physics/StaticRectPhysicsSprite.js",
          "src/physics/PolyBody.js",
          "src/physics/ConeBody.js",
          "src/physics/CircSegmentBody.js",

          "src/things/Spaceship.js",
          "src/things/Star.js",
          "src/things/CompositeSprite.js",
          "src/things/World.js",
          "src/things/_Level.js",
          "src/things/Level1.js",

          "src/layer/BaseLayer.js",
          "src/layer/MoveableObjectsLayer.js",
          "src/layer/GameLayer.js",
          "src/layer/StatsLayer.js",
          "src/layer/MenuLayer.js",
          "src/layer/GameOverLayer.js",

          "src/scene/BaseScene.js",
          "src/scene/MenuScene.js",
          "src/scene/GameScene.js",
          "src/scene/GameOverScene.js"
        ],
        dest : 'orbiter.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
