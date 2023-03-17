import { IEventPublisher } from "../../../../../../../../libs/sofka";
import { BebidaDomainEntityBase } from "../../../entities";
import { BebidaCreadaEventPublisherBase } from '.';

class EventPublisher extends BebidaCreadaEventPublisherBase { }

describe('GotBebidaEventPublisherBase', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new EventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'entrega_a_domicilio.bebida-creada';
    const response = new BebidaDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});

