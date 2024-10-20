package alphvbackend.alphvbackend.service;

import alphvbackend.alphvbackend.dto.ShapeDTO;
import alphvbackend.alphvbackend.model.Shape;
import alphvbackend.alphvbackend.repository.ShapeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShapeService {

    private final ShapeRepo shapeRepo;

    //Save the ShapeDTO to the database
    public void saveShape(ShapeDTO shapeDTO){
        Shape shape = new Shape();
        shape.setName(shapeDTO.name());
        shape.setShape(shapeDTO.shape());
        shape.setColor(shapeDTO.color());

        shapeRepo.save(shape);

        System.out.println("Saving shape to the database: " + shape);
    }

    //Get all Admin Shape Details to Table
    public List<Shape> getAllShapes(){
        return shapeRepo.findAll();
    }

    //Delete by Id for Shape Details
    public void deleteShape(Long id){
        shapeRepo.deleteById(id);
    }

    //Update by ID for Shape Details
    public void updateShape(Long id, ShapeDTO shapeDTO){
        Optional<Shape> existingShape = shapeRepo.findById(id);

        Shape shape = existingShape.get();
        shape.setName(shapeDTO.name());
        shape.setShape(shapeDTO.shape());
        shape.setColor(shapeDTO.color());

        shapeRepo.save((shape));

        System.out.println("Shape updated successfully");
    }

    //get specific shape for form viewing
    public ShapeDTO getShapeById(Long id){
        Optional<Shape> existingShape = shapeRepo.findById(id);

        if(existingShape.isPresent()){
            Shape shape = existingShape.get();
            return new ShapeDTO(shape.getName(), shape.getShape(), shape.getColor());
        }else{
            throw new RuntimeException("Shape not found");
        }
    }


}
