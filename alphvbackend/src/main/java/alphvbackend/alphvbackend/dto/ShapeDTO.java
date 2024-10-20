package alphvbackend.alphvbackend.dto;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;


public record ShapeDTO(
   String name,
   String shape,
   String color
) { }
