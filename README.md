# render_farm
renderfarm renders a blender image in parts on multiple computers

requires nodejs + express

this is an early version that uses two computers in my studio to render the left (LH) and right (RH) sides of an image in blender, running headless in the background.

next: add inputs and worker nodes from webform
then split up image in thin strips and assign them to nodes as they complete previous assignment.

pi branch added to remove the sshpass so that it can run on the final renderfarm manager, a raspberry pi.