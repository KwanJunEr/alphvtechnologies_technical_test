package alphvbackend.alphvbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.id.factory.spi.GenerationTypeStrategy;

import java.time.LocalDateTime;

@Entity
@Data
@Getter @Setter
@Table(name = "shapes")
public class Shape {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name  = "name")
    private String name;

    @Column(name = "shape")
    private String shape;

    @Column(name = "color")
    private String color;

    @Column(name = "created-at")
    private LocalDateTime created_at;

    @PrePersist  // This annotation is part of JPA’s lifecycle callbacks. It is used to indicate that the method it annotates (onCreate()) should be called before the entity is persisted (before being inserted into the database).
    protected void onCreate(){  //This is a lifecycle callback method that gets executed when the entity is about to be persisted.
        created_at = LocalDateTime.now();
    }

    @PreUpdate
    protected  void onUpdate(){
        created_at = LocalDateTime.now();
    }
}
