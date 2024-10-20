package alphvbackend.alphvbackend.controller;

import alphvbackend.alphvbackend.dto.ShapeDTO;
import alphvbackend.alphvbackend.model.Shape;
import alphvbackend.alphvbackend.service.ShapeService;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class adminactioncontroller {

    private final ShapeService shapeService;

    //admin submit
    @PostMapping("/submitshape")
    public ResponseEntity<String> submitShape(@RequestBody ShapeDTO shapeDTO){
        try{
            shapeService.saveShape(shapeDTO);

            return ResponseEntity.ok("Shape submitted successfully");
        }catch (Exception e){
            return ResponseEntity.status(500).body("Shape submission failed: " + e.getMessage());
        }
    }

    //admin get
    @GetMapping("/adminshapedetails")
    public List<Shape> getAllShapes(){
        return shapeService.getAllShapes();
    }


    //admin update
    @PutMapping("/currentshapedetails/{id}")
    public ResponseEntity<String> updateShape(@PathVariable Long id, @RequestBody ShapeDTO shapeDTO){
        try{
            shapeService.updateShape(id, shapeDTO);
            return ResponseEntity.ok("Shape is updated successfully");
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }


    //admin delete
    @DeleteMapping("/adminshapedetails/{id}")
    public ResponseEntity<Void> deleteShape(@PathVariable Long id){
        shapeService.deleteShape(id);
        return ResponseEntity.noContent().build();
    }

    //admin get shape by id for update
    @GetMapping("/adminshapedetails1/{id}")
    public ResponseEntity<ShapeDTO> getShapeById(@PathVariable Long id){
        try{
            ShapeDTO shapeDTO = shapeService.getShapeById(id);
            return ResponseEntity.ok(shapeDTO);
        }catch (Exception e){
            return ResponseEntity.status(404).body(null);
        }
    }








}
