package alphvbackend.alphvbackend.repository;

import alphvbackend.alphvbackend.model.Shape;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ShapeRepo extends JpaRepository <Shape, Long> {


}
